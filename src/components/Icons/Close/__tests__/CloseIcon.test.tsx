import React from "react";
import { render } from "@testing-library/react";
import CloseIcon from "../Close";

describe("CloseIcon", () => {
  it("renders without crashing", () => {
    render(<CloseIcon />);
  });

  it("adds additional className to the wrapper element", () => {
    const { container } = render(<CloseIcon className="custom-class" />);
    const { firstChild } = container;
    expect(firstChild).toHaveClass("custom-class");
  });
});
