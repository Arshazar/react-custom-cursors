import React, { useState, useEffect } from "react";

import s from "../styles/Cursor.module.css";

interface PositionType {
  x: number | null;
  y: number | null;
}
interface PropsType {
  hasDot?: boolean;
  dotColor?: string;
  hasCursor?: boolean;
  cursorColor?: string;
  cursorSize?: "xs" | "sm" | "md" | "lg" | "xl";
  cursorSpeed?: "slow" | "medium" | "fast";
}

const Cursor: React.FC<PropsType> = ({
  hasDot = false,
  dotColor = "#fff",
  hasCursor = true,
  cursorColor = "#f00",
  cursorSize = "md",
  cursorSpeed = "medium",
}) => {
  const [position, setPosition] = useState<PositionType>({
    x: null,
    y: null,
  });

  const cursorWidth = {
    xs: "15px",
    sm: "20px",
    md: "30px",
    lg: "40px",
    xl: "50px",
  }[cursorSize];
  const cursorDuration = {
    slow: "200ms",
    medium: "100ms",
    fast: "70ms",
  }[cursorSpeed];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };

    document.addEventListener("mousemove", handler);

    return () => {
      document.removeEventListener("mousemove", handler);
    };
  }, []);

  return (
    <>
      {hasCursor && (
        <div
          className={s["cursor"]}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: cursorWidth,
            transitionDuration: cursorDuration,
            backgroundColor: cursorColor,
          }}
        />
      )}
      {hasDot && (
        <div
          className={s["dot"]}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            backgroundColor: dotColor,
          }}
        />
      )}
    </>
  );
};

export { Cursor };
