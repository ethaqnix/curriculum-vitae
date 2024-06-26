import React from "react";
import styles from "./StarCounter.module.scss";

interface StarCounterProps {
  count: number;
  range: number;
  label: string;
}

const StarCounter = ({ count, range, label }: StarCounterProps) => {
  return (
    <div className={styles["star-ratings"]}>
      <div className={styles["empty-ratings"]}>
        <div
          style={{ width: `${(100 * count) / range}%` }}
          className={styles["fill-ratings"]}
        >
          <span>★★★★★</span>
        </div>
        <span>★★★★★</span>
      </div>
      {label}
    </div>
  );
};

export default StarCounter;
