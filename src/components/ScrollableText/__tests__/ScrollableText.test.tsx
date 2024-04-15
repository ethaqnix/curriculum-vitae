import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ScrollableText from "../ScrollableText";

describe("ScrollableText", () => {
  it("renders without crashing", () => {
    render(<ScrollableText>Test Content</ScrollableText>);
  });

  it("adds additional className to the scrollable content", () => {
    render(
      <ScrollableText className="custom-class">Test Content</ScrollableText>
    );
    expect(screen.getByTestId("scrollable-text")).toHaveClass("custom-class");
  });

  it("triggers onScroll event", () => {
    render(<ScrollableText>Test Content</ScrollableText>);
    const scrollableContent = screen.getByTestId("scrollable-text");

    expect(
      screen.getByTestId("scrollable-text-effect-top")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("scrollable-text-effect-bottom")
    ).toBeInTheDocument();

    fireEvent.scroll(scrollableContent, {
      target: {
        scrollTop: 0,
        scrollTopMax: 100,
      },
    });

    expect(screen.getByTestId("scrollable-text-effect-top")).not.toHaveClass(
      "scroll-effect-top"
    );

    expect(screen.getByTestId("scrollable-text-effect-bottom")).toHaveClass(
      "scroll-effect-bottom"
    );

    fireEvent.scroll(scrollableContent, {
      target: {
        scrollTop: 50,
        scrollTopMax: 100,
      },
    });

    expect(screen.getByTestId("scrollable-text-effect-top")).toHaveClass(
      "scroll-effect-top"
    );

    expect(screen.getByTestId("scrollable-text-effect-bottom")).toHaveClass(
      "scroll-effect-bottom"
    );

    fireEvent.scroll(scrollableContent, {
      target: {
        scrollTop: 100,
        scrollTopMax: 100,
      },
    });
    expect(screen.getByTestId("scrollable-text-effect-top")).toHaveClass(
      "scroll-effect-top"
    );
    expect(screen.getByTestId("scrollable-text-effect-bottom")).not.toHaveClass(
      "scroll-effect-bottom"
    );
  });
});
