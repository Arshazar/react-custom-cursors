/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<import("../cursor").PropsType>;
    tags: string[];
    argTypes: {
        size: {
            control: string;
        };
        speed: {
            control: string;
        };
        shape: {
            control: string;
        };
        animation: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ExtraSmall: Story;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Large: Story;
export declare const ExtraLarge: Story;
