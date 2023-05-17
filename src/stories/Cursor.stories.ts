import type { Meta, StoryObj } from "@storybook/react";

import { Cursor } from "./CursorStory";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Cursor",
  component: Cursor,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select" },
    speed: { control: "select" },
    shape: { control: "select" },
    animation: { control: "select" },
  },
} satisfies Meta<typeof Cursor>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ExtraSmall: Story = {
  args: {
    size: "xs",
  },
};
export const Small: Story = {
  args: {
    size: "sm",
  },
};
export const Medium: Story = {
  args: {
    size: "md",
  },
};
export const Large: Story = {
  args: {
    size: "lg",
  },
};
export const ExtraLarge: Story = {
  args: {
    size: "xl",
  },
};
