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
  isHollow?: boolean;
  dotColor?: string;
  hasCursor?: boolean;
  color?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  speed?: "slow" | "medium" | "fast";
  animation?: "none" | "spin" | "beat";
  shape?:
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
  hoveringAnimation?: "none" | "magnify";
}

const Cursor: React.FC<PropsType> = ({
  hasDot = false,
  isHollow = false,
  dotColor = "#fff",
  hasCursor = true,
  color = "#f00",
  size = "md",
  speed = "medium",
  shape = "round",
  animation = "none",
  hoveringAnimation = "none",
}) => {
  const [position, setPosition] = useState<PositionType>({
    x: null,
    y: null,
  });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const cursorWidth = {
    xs: 8,
    sm: 12,
    md: 20,
    lg: 35,
    xl: 50,
  }[size];
  const cursorDuration = {
    slow: "450ms",
    medium: "300ms",
    fast: "100ms",
  }[speed];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });

      const hoveredElement = document.elementFromPoint(clientX, clientY);
      if (hoveredElement) {
        const isLink =
          hoveredElement instanceof HTMLAnchorElement ||
          hoveredElement instanceof HTMLButtonElement;
        setIsHovering(isLink);
      }
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
    backgroundColor: isHollow ? "transparent" : color,
    opacity: 0.5,
    border: `1px solid ${color}`,
  };
  const cursorShapeStyle = () => {
    switch (shape) {
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
          borderColor: `transparent transparent ${color}`,
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
          className={cn(
            s["cursor"],
            s[animation],
            isHovering &&
              hoveringAnimation !== "none" &&
              s[`hovering-${hoveringAnimation}`]
          )}
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
