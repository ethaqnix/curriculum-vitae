import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("renders without crashing", () => {
    render(<Button />);
  });

  it("renders button text correctly", () => {
    const buttonText = "Submit";
    render(<Button>{buttonText}</Button>);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it("renders additional class correctly", () => {
    const { container } = render(<Button className="custom-class" />);
    const { firstChild } = container;
    expect(firstChild).toHaveClass("custom-class");
  });
});
