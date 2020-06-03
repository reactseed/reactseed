[![npm version](https://img.shields.io/npm/v/@reactseed/devserver.svg?style=flat)](https://www.npmjs.com/package/@reactseed/devserver)

# `@reactseed/devserver`
Override webpack devServer configuration for create-react-app 2.0 order to support mockserver.

- [How to install](#how-to-install)
- [Usage](#usage)

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