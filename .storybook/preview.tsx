import React from "react";
import type { Preview } from "@storybook/react";
import { Primary, Controls } from "@storybook/blocks";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: () => (
        <>
          <h1>Documentation</h1>
          <Primary />
          <h1>Properties</h1>
          <Controls />
        </>
      ),
    },
  },
};

export default preview;
