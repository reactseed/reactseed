# `@reactseed/devserver`

[![LICENSE][LICENSE-image]][LICENSE-url] [![npm version][npm-image]][npm-url] [![download-image]][download-url]

[LICENSE-image]:https://img.shields.io/badge/license-BSD-blue.svg
[LICENSE-url]: https://github.com/reactseed/devserver/blob/master/LICENSE

[npm-image]: https://img.shields.io/npm/v/@reactseed/devserver.svg
[npm-url]: https://www.npmjs.com/package/@reactseed/devserver

[download-image]: https://img.shields.io/npm/dm/@reactseed/devserver.svg?style=flat-square
[download-url]:  https://www.npmjs.com/package/@reactseed/devserver

Override webpack devServer configuration for create-react-app 2.0 order to support mockServer.

- [How to install](#how-to-install)
- [Usage](#usage)
 - [Configure customize-cra](#configure-customize-cra)
 - [Conventional Mock file](#conventional-mock-file)
 - [Write Mock files](#write-mock-files)
 
## How to install

This project relies on [`react-app-rewired`](https://github.com/timarney/react-app-rewired/)、[`customize-cra`](https://github.com/arackaf/customize-cra). You'll need to install that in order for `@reactseed/devserver` to work.

```bash
yarn add customize-cra react-app-rewired @reactseed/devserver --dev
```

## Usage

### Configure customize-cra

```js
/* config-overrides.js */
const { overrideDevServer } = require('customize-cra');
const devServer = require('@reactseed/devserver');

module.exports = {
    devServer: overrideDevServer(devServer),
};
```

### Conventional Mock file

Conventions All files in the `/mock` folder are mock files except files whose file name starts with `_`.

```
.
├── mock
    ├── _constant.js
    └── app.js
└── src
```
### Write Mock files

```js
/* _constant.js */
module.exports = {
  apiPrefix: '/api',
};
```
```js
/* app.js */
const { apiPrefix } = require('./_constant');
const packageJSON = require('../package.json');

module.exports = {
  [`GET ${apiPrefix}/app`]: packageJSON,
};
```
Visit `/api/app ` to get a response.