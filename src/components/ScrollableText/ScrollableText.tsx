import classnames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ScrollableText.module.scss";

interface ScrollableTextProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollableText = ({ children, className = "" }: ScrollableTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [onTop, setOnTop] = useState(true);
  const [onBottom, setOnBottom] = useState(false);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop === 0) setOnTop(true);
    else setOnTop(false);
    if (e.currentTarget.scrollTop === (e.target as any).scrollTopMax)
      setOnBottom(true);
    else setOnBottom(false);
  };

  useEffect(() => {
    if (ref?.current) {
      setOnBottom(!(ref.current.scrollHeight > ref.current.clientHeight));
    }
  }, [ref?.current?.scrollHeight]);

  return (
    <div className={styles.root} data-testid="scrollable-text-container">
      <div
        className={classnames({
          [styles["scroll-effect-top"]]: !onTop,
        })}
        data-testid="scrollable-text-effect-top"
      />
      <div
        ref={ref}
        onScroll={onScroll}
        className={classnames(styles.scroll, className)}
        data-testid="scrollable-text"
      >
        {children}
      </div>
      <div
        className={classnames({
          [styles["scroll-effect-bottom"]]: !onBottom,
        })}
        data-testid="scrollable-text-effect-bottom"
      />
    </div>
  );
};

export default ScrollableText;
