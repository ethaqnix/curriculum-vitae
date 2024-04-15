import React from "react";
import styles from "./AnimatedList.module.scss";
import classNames from "classnames";

interface AnimatedListProps {
  keys: string[];
  items: {
    key: string;
    component: React.ReactNode;
    order: number;
  }[];
  limit?: number;
}

const AnimatedList = ({ items, keys, limit = 5 }: AnimatedListProps) => {
  const sorteditems = items.sort((a, b) => a.order - b.order).slice(0, limit);

  return (
    <div data-testid="animated-list" className={styles["animated-list"]}>
      {keys.map((key) => {
        const index = sorteditems.findIndex(
          (sortedItem) => key === sortedItem.key
        );
        if (index < 0) return null;

        const { component } = sorteditems[index];
        return (
          <div
            key={key}
            data-testid={`animated-list-item-${index}`}
            className={classNames(
              styles["animated-list-item"],
              styles[`animated-list-item-${index}`]
            )}
          >
            {component}
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedList;
