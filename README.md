# ES6 FlowType.js

[![Build Status](https://travis-ci.org/flekschas/flowtype.svg?branch=master)](https://travis-ci.org/flekschas/flowtype)

> FlowType ES is a rewrite of the awesome [FlowType.JS](http://simplefocus.com/flowtype/) in ES6. It doesn't require jQuery and triggers recalculation on requestAnimationFrame.

## Install

```
npm install flowtype-es
```

## API

```javascript
import createFlowtype from "flowtype-es";
```

### `const flowtype = createFlowtype(element, options)`

Creates and attaches event listeners for automatic recalculation of the font size upon resizing the `element`.

- `element` is a reference to the dom element for which the font size should be calculated automatically.
- `options` lets you customize the calculation of the font size.

**Returns** an object with `update()` and `destroy()`.

### `flowtype.update()`

Triggers a recalculation of the font size.

### `flowtype.destroy()`

Removes all event listeners and stops the automatic recalculation of the font size upon resizing the `element`.

### Options

| Option    | Description                                                            | Dtype | Default |
| --------- | ---------------------------------------------------------------------- | ----- | ------- |
| maximum   | Max width of the element until the font size is controlled             | int   | 1200    |
| minimum   | Min width of the element until the font size is controlled             | int   | 500     |
| maxFont   | Max font size ever used                                                | int   | 40      |
| minFont   | Min font size ever used                                                | int   | 12      |
| fontRatio | Font ratio for determining the font size based on the elements's width | int   | 30      |

## Example

```javascript
import createFlowtype from "flowtype-es";

const flowtype = createFlowtype(document.body, {
  maximum: 1200,
  minimum: 500,
  maxFont: 40,
  minFont: 12,
  fontRatio: 30
});
```
