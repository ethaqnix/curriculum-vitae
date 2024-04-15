import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import PreviousIcon from "../Previous";

describe("PreviousIcon", () => {
  it("renders without crashing", () => {
    render(<PreviousIcon />);
  });

  it("adds additional className to the wrapper element", () => {
    const { container } = render(<PreviousIcon className="custom-class" />);
    const { firstChild } = container;
    expect(firstChild).toHaveClass("custom-class");
    expect(firstChild).toHaveClass("previous");
    expect(screen.getAllByRole("presentation")).toHaveLength(2);
    expect(screen.getAllByRole("presentation")[0]).toHaveClass("top-bar");
    expect(screen.getAllByRole("presentation")[1]).toHaveClass("bottom-bar");
  });

  it("calls onClick event handler when clicked", () => {
    const onClickMock = jest.fn();
    const { container } = render(<PreviousIcon onClick={onClickMock} />);
    const { firstChild } = container;

    fireEvent.click(firstChild!);
    expect(onClickMock).toHaveBeenCalled();
  });
});
