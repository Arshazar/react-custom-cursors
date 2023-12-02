import React from "react";

import { Cursor as CursorComponent, PropsType } from "../cursor";

const Cursor: React.FC<PropsType> = ({
  hasDot,
  isHollow,
  dotColor,
  hasCursor,
  color,
  size,
  speed,
  shape,
  animation,
  hoveringAnimation,
  zIndex,
  mixBlendMode,
}: PropsType) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <button
        style={{
          position: "relative",
          padding: "1rem 2rem",
          background: "darkturquoise",
          color: "white",
          border: "none",
          borderRadius: "20px",
          fontWeight: "600",
          fontSize: "1.2em",
          cursor: "pointer",
        }}
      >
        Hover me!
      </button>
      <a href="#">Hover me!</a>
      <CursorComponent
        hasDot={hasDot}
        zIndex={zIndex}
        isHollow={isHollow}
        dotColor={dotColor}
        hasCursor={hasCursor}
        color={color}
        size={size}
        speed={speed}
        shape={shape}
        animation={animation}
        hoveringAnimation={hoveringAnimation}
        mixBlendMode={mixBlendMode}
      />
    </div>
  );
};

export { Cursor };
