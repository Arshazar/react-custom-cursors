import React, { useState, useEffect } from "react";
import cn from "classnames";

import s from "../styles/Cursor.module.scss";
import { clipPaths } from "./constants";

interface PositionType {
  x: number | null;
  y: number | null;
}
export interface PropsType {
  hasDot?: boolean;
  dotColor?: string;
  hasCursor?: boolean;
  cursorColor?: string;
  cursorSize?: "xs" | "sm" | "md" | "lg" | "xl";
  cursorSpeed?: "slow" | "medium" | "fast";
  cursorAnimation?: "none" | "spin" | "beat";
  cursorShape?:
    | "round"
    | "triangle"
    | "square"
    | "pentagon"
    | "hexagon"
    | "heptagon"
    | "octagon"
    | "nonagon"
    | "decagon"
    | "star"
    | "frame"
    | "cross"
    // | "heart"
    | "rhombus";
}

const Cursor: React.FC<PropsType> = ({
  hasDot = false,
  dotColor = "#fff",
  hasCursor = true,
  cursorColor = "#f00",
  cursorSize = "md",
  cursorSpeed = "medium",
  cursorShape = "round",
  cursorAnimation = "none",
}) => {
  const [position, setPosition] = useState<PositionType>({
    x: null,
    y: null,
  });

  const cursorWidth = {
    xs: 15,
    sm: 20,
    md: 30,
    lg: 40,
    xl: 50,
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

  const cursorStyle = {
    width: `${cursorWidth}px`,
    left: `${position.x}px`,
    top: `${position.y}px`,
    transitionDuration: cursorDuration,
    backgroundColor: cursorColor,
    opacity: 0.5,
  };
  const cursorShapeStyle = () => {
    switch (cursorShape) {
      case "round":
        return {
          borderRadius: "100%",
        };
      case "triangle":
        return {
          width: 0,
          height: 0,
          backgroundColor: "transparent",
          borderStyle: "solid",
          borderWidth: `0 ${cursorWidth / 2}px ${
            (cursorWidth * Math.sqrt(3)) / 2
          }px`,
          borderColor: `transparent transparent ${cursorColor}`,
        };
      case "square":
        return {
          borderRadius: 0,
        };
      case "pentagon":
        return {
          clipPath: clipPaths().pentagon,
        };
      case "hexagon":
        return {
          clipPath: clipPaths().hexagon,
        };
      case "heptagon":
        return {
          clipPath: clipPaths().heptagon,
        };
      case "octagon":
        return {
          clipPath: clipPaths().octagon,
        };
      case "nonagon":
        return {
          clipPath: clipPaths().nonagon,
        };
      case "decagon":
        return {
          clipPath: clipPaths().decagon,
        };
      case "star":
        return {
          clipPath: clipPaths().star,
        };
      case "frame":
        return {
          clipPath: clipPaths().frame,
        };
      case "cross":
        return {
          clipPath: clipPaths().cross,
        };
      // case "heart":
      //   return {
      //     clipPath: clipPaths(cursorWidth).heart,
      //     transform: `translate(-50%, - 50%) scale(${cursorWidth / 24})`,
      //   };
      case "rhombus":
        return {
          clipPath: clipPaths().rhombus,
        };
      default:
        return {};
    }
  };

  return (
    <>
      {hasCursor && (
        <div
          className={cn(s["cursor"], s[cursorAnimation])}
          style={{ ...cursorStyle, ...cursorShapeStyle() }}
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
