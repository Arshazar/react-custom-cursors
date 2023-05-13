import React from "react";
interface PropsType {
    hasDot?: boolean;
    dotColor?: string;
    hasCursor?: boolean;
    cursorColor?: string;
    cursorSize?: "xs" | "sm" | "md" | "lg" | "xl";
    cursorSpeed?: "slow" | "medium" | "fast";
    cursorShape?: "round" | "triangle" | "rectangle" | "square" | "pentagon" | "hexagon" | "octagon";
}
declare const Cursor: React.FC<PropsType>;
export { Cursor };
