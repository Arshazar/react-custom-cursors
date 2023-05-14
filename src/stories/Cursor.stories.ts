import type { Meta, StoryObj } from "@storybook/react";

import { Cursor } from "..";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Cursor",
  component: Cursor,
  tags: ["autodocs"],
  argTypes: {
    cursorSize: { control: "select" },
    cursorSpeed: { control: "select" },
    cursorShape: { control: "select" },
    cursorAnimation: { control: "select" },
  },
} satisfies Meta<typeof Cursor>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ExtraSmall: Story = {
  args: {
    cursorSize: "xs",
  },
};
export const Small: Story = {
  args: {
    cursorSize: "sm",
  },
};
export const Medium: Story = {
  args: {
    cursorSize: "md",
  },
};
export const Large: Story = {
  args: {
    cursorSize: "lg",
  },
};
export const ExtraLarge: Story = {
  args: {
    cursorSize: "xl",
  },
};
