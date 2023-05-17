# React Custom Cursors

Custom cursors for React.

## Installation

You can simply install React Custom Cursors either by yarn, npm or pnpm.

#### yarn

```bash
yarn add react-custom-hooks
```

#### npm

```bash
npm i react-custom-hooks
```

#### pnpm

```bash
pnpm add react-custom-hooks
```

**Table of Contents**

- [Cursor](#Cursor)
- [API](#API)

## Cursor

Since Cursor component uses react hooks under the hood, you've got to use it inside a function component.

usage: `<Cursor {...props} />`

```js
import React from "react";
import { Cursor } from "react-custom-cursors";

import "react-custom-cursors/dist/index.css";

function App() {
  /* your codes
   */
  return (
    <div className="app">
      <Cursor />
    </div>
  );
}

export default App;
```

## API

| Prop                | Type      | Default  | Description                                                                                                                            |
| :------------------ | :-------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `hasCursor`         | `boolean` | true     | If true, cursor will be available                                                                                                      |
| `color`             | `string`  | "#f00"   | It accepts all supported values by css                                                                                                 |
| `size`              | `string`  | "md"     | "xs", "sm", "md", "lg", xl"                                                                                                            |
| `speed`             | `string`  | "medium" | "slow", "medium", "fast"                                                                                                               |
| `shape`             | `string`  | "round"  | "round", "triangle", "square", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon", "star", "frame", "cross", "rhombus" |
| `animation`         | `string`  | "none"   | "none", "spin", "beat"                                                                                                                 |
| `hoveringAnimation` | `string`  | "none"   | "none", "magnify"; won't work unless animation is set to "none".                                                                       |
| `hasDot`            | `boolean` | false    | if true, dot will be available                                                                                                         |
| `dotColor`          | `string`  | "#fff"   | It accepts all supported values by css                                                                                                 |

---

## Website

[Website](https://react-custom-cursors.netlify.app)

## Feedback

If you have any feedback, please don't hesitate to reach out to me at 4rsh4vir4z4rf4r@gmail.com

## Authors

- [@arshazar](https://www.github.com/arshazar)

## License

[MIT](https://choosealicense.com/licenses/mit/)
