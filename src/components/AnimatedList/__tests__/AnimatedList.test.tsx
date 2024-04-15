import React from "react";
import { render, screen } from "@testing-library/react";
import AnimatedList from "../AnimatedList";

describe("renders AnimatedList component correctly", () => {
  const items = [
    { key: "item1", component: <div data-testid={1} />, order: 5 },
    { key: "item2", component: <div data-testid={2} />, order: 3 },
    { key: "item3", component: <div data-testid={3} />, order: 4 },
    { key: "item4", component: <div data-testid={4} />, order: 2 },
    { key: "item5", component: <div data-testid={5} />, order: 6 },
    { key: "item6", component: <div data-testid={6} />, order: 1 },
  ];

  it("should render without error", () => {
    const { container } = render(
      <AnimatedList
        keys={["item1", "item2", "item3", "item4", "item5", "item6"]}
        items={items}
        limit={5}
      />
    );
  });

  it.each([1, 2, 3])("should render as much items than limit", (limit) => {
    render(
      <AnimatedList
        keys={["item1", "item2", "item3", "item4", "item5", "item6"]}
        items={items}
        limit={limit}
      />
    );
    const { children } = screen.getByTestId("animated-list");

    expect(children.length).toBe(limit);
  });

  it("should render items with lower order", () => {
    render(
      <AnimatedList
        keys={["item1", "item2", "item3", "item4", "item5", "item6"]}
        items={items}
        limit={3}
      />
    );

    expect(screen.getByTestId(6)).toBeInTheDocument();
    expect(screen.getByTestId(4)).toBeInTheDocument();
    expect(screen.getByTestId(2)).toBeInTheDocument();
    expect(screen.queryByTestId(1)).not.toBeInTheDocument();
    expect(screen.queryByTestId(3)).not.toBeInTheDocument();
    expect(screen.queryByTestId(5)).not.toBeInTheDocument();
  });

  it("should render List with correct classnames", () => {
    const { container } = render(
      <AnimatedList
        keys={["item1", "item2", "item3", "item4", "item5", "item6"]}
        items={items}
        limit={3}
      />
    );

    const { firstChild } = container;

    expect(firstChild).toHaveClass("animated-list");
  });

  it("should render items with correct classnames", () => {
    render(
      <AnimatedList
        keys={["item1", "item2", "item3", "item4", "item5", "item6"]}
        items={items}
        limit={2}
      />
    );

    expect(screen.getByTestId("animated-list-item-0")).toHaveClass(
      "animated-list-item"
    );
    expect(screen.getByTestId("animated-list-item-0")).toHaveClass(
      "animated-list-item-0"
    );

    expect(screen.getByTestId("animated-list-item-1")).toHaveClass(
      "animated-list-item"
    );
    expect(screen.getByTestId("animated-list-item-1")).toHaveClass(
      "animated-list-item-1"
    );
  });
});
