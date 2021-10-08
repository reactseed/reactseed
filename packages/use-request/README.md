# `@reactseed/use-request`

[![LICENSE][LICENSE-image]][LICENSE-url] [![npm version][npm-image]][npm-url] [![npm downloads][download-image]][download-url]

[LICENSE-image]:https://img.shields.io/badge/license-BSD-blue.svg
[LICENSE-url]: https://github.com/reactseed/use-request/blob/master/LICENSE

[npm-image]: https://img.shields.io/npm/v/@reactseed/use-request.svg
[npm-url]: https://www.npmjs.com/package/@reactseed/use-request

[download-image]: https://img.shields.io/npm/dm/@reactseed/use-request.svg?style=flat-square
[download-url]: https://npmjs.org/package/@reactseed/use-request

This project is extended based on [@umijs/use-request](https://github.com/umijs/hooks/tree/master/packages/use-request). Support all APIs of `@umijs/use-request`.

See the [document](https://hooks.umijs.org/hooks/async) about `@umijs/use-request` API for more information.


## Installation

```sh
npm install @reactseed/use-request
# or
yarn add @reactseed/use-request
```
## Features
- Built-in axios as the default request method.
- Support Restful style API.
- Support global error message handling and whether to handle error messages.
- Support typescript.

## How to use
A simple example:

[![Edit useRequest](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/userequest-4sike?fontsize=14&hidenavigation=1&theme=dark)


```jsx
import React from "react";
import ReactDOM from "react-dom";
import useRequest from "@reactseed/use-request";

const queryData = "https://randomuser.me/api";
const App = () => {
  const { data, run, loading } = useRequest(queryData, {
    manual: true
  });

  return (
    <>
      <button onClick={run} disabled={loading}>
        fetch
      </button>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

### Use restful API
Request `/api/user/1`.

```jsx
const { data } = useRequest((data) => ({
  url: '/api/user/:id',
  data: {
    id:1,
  },
}));
```
### Custom error handling

```jsx
import { config } from "@reactseed/use-request";

config({
  onErrorBefore: error => {
    alert(error.messgae);
  }
});
```
### Disabled error message

```jsx
import useRequest from "@reactseed/use-request";

const { data } = useRequest('https://randomuser.me/api1', {
    disabledErrorMessage: false
});
```

Examples of error handling:

[![Edit useRequest-handleError](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/userequest-handleerror-7x6je?fontsize=14&hidenavigation=1&theme=dark)

## License

`@reactseed/use-request` is open source software [licensed as BDS](https://github.com/reactseed/use-request/blob/master/LICENSE).

