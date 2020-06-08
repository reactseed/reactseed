# `@reactseed/use-redux`

[![LICENSE][LICENSE-image]][LICENSE-url] [![npm version][npm-image]][npm-url] [![npm downloads][download-image]][download-url]

[LICENSE-image]:https://img.shields.io/badge/license-BSD-blue.svg
[LICENSE-url]: https://github.com/reactseed/use-redux/blob/master/LICENSE

[npm-image]: https://img.shields.io/npm/v/@reactseed/use-redux
[npm-url]: https://www.npmjs.com/package/@reactseed/use-redux

[download-image]: https://img.shields.io/npm/dm/@reactseed/use-redux.svg?style=flat-square
[download-url]: https://npmjs.org/package/@reactseed/use-redux

## Live demo

[![Edit useRedux](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/useredux-r5wv3?fontsize=14&hidenavigation=1&theme=dark)

## Features
- Very simple to use, There is only one API.
- Based on immer, easier to manipulate state.
- Say goodbye to cumbersome action/reducer.
- Support typescript.

## Installation

```sh
npm install @reactseed/use-redux immer redux react-redux
# or
yarn add @reactseed/use-redux immer redux react-redux
```
## API


It exports all the APIs of [redux](https://github.com/reduxjs/redux) and [react-redux](https://github.com/reduxjs/react-redux).

### userRedux
```jsx
const [state, callbacks] = useMethods(methods);
```
- __state__: the current state.
- __callbacks__: a set of callbacks corresponding to your methods.
- __methods__: a set of method which modify the state or return new states.

A full example:

[![Edit useRedux-Simple](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/useredux-simple-ntodw?fontsize=14&hidenavigation=1&theme=dark)

```js
import React from "react";
import ReactDOM from "react-dom";
import useRedux, { Provider, createStore } from "@reactseed/use-redux";

const store = createStore(() => ({
  age: 20,
  name: "reactseed"
}));

const methods = state => {
  const { age } = state;
  return {
    updateName: name => {
      state.name = name;
    },
    becomeOlder: () => {
      state.age = age + 1;
    }
  };
};

const App = () => {
  const [state, { updateName, becomeOlder }] = useRedux(methods);
  return (
    <div className="App">
      <h1>
        Hello {state.name} ({state.age})
      </h1>
      <input
        onChange={e => {
          updateName(e.target.value);
        }}
        value={state.name}
      />
      <br />
      <button onClick={becomeOlder}>Older</button>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```
 > Notice：Components using useRedux need to be used in Provider, like this:
 
 ```jsx
 import { Provider, createStore } from "@reactseed/use-redux";
 const store = createStore(() => ({
  name: "reactseed"
}));
 ...
 ...
<Provider store={store}>
    <App />
</Provider>
 ```


## License

`@reactseed/use-redux` is open source software [licensed as BDS](https://github.com/reactseed/use-redux/blob/master/LICENSE).






