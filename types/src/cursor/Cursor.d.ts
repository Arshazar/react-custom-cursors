import React from "react";
export interface PropsType {
    hasDot?: boolean;
    dotColor?: string;
    hasCursor?: boolean;
    color?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    speed?: "slow" | "medium" | "fast";
    animation?: "none" | "spin" | "beat";
    shape?: "round" | "triangle" | "square" | "pentagon" | "hexagon" | "heptagon" | "octagon" | "nonagon" | "decagon" | "star" | "frame" | "cross" | "rhombus";
    hoveringAnimation: "none" | "magnify";
}
declare const Cursor: React.FC<PropsType>;
export { Cursor };
