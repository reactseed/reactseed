---
id: supported-browsers-features
title: 支持的浏览器和特性
---

## 支持的浏览器

默认情况下，生成的项目支持所有现代浏览器。对 Internet Explorer 9、10 和 11 的支持需要 polyfill。对于一组支持旧浏览器的 polyfill，请使用 [react-app-polyfill](https://github.com/facebook/create-react-app/blob/main/packages/react-app-polyfill/README.md)。

## 支持的语言功能

该项目支持最新 JavaScript 标准的超集。除了 [ES6](https://github.com/lukehoban/es6features) 语法特性外，它还支持：

- [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016)。
- [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017)。
- [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread) (ES2018).
- [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (第 4 阶段提案)。
- [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (第 3 阶段提案的一部分)。
- [JSX](https://facebook.github.io/react/docs/introducing-jsx.html), TypeScript。

详细了解[不同的提案阶段](https://tc39.github.io/process-document/)。

请注意，**此项目默认不包含 [polyfills](https://github.com/facebook/create-react-app/blob/main/packages/react-app-polyfill/README.md)**。

如果您使用需要**运行时支持**的任何其他 ES6+ 功能（例如 `Array.from()` 或 `Symbol`），请确保您 [手动引入适当的 polyfills](https://github.com/facebook/create-react-app/blob/main/packages/react-app-polyfill/README.md)，或者您的目标浏览器已经支持它们。

## 配置支持的浏览器

默认情况下，生成的项目在您的 `package.json` 文件中包含一个 [`browserslist`](https://github.com/browserslist/browserslist) 配置，以根据全球使用情况（`> 0.2 %`) 用于生产构建，现代浏览器用于开发。这提供了良好的开发体验，尤其是在使用 async/await 等语言特性时，但仍提供与生产中的许多浏览器的高度兼容性。

`browserslist` 配置控制输出的 JavaScript，以便发出的代码与指定的浏览器兼容。 `production` 列表将在通过运行`build` 脚本创建生产构建时使用，而`development` 列表将在运行`start` 脚本时使用。您可以使用 [https://browserl.ist](https://browserl.ist/?q=%3E+0.2%25%2C+not+dead%2C+not+op_mini+all) 查看支持的浏览器通过您配置的“浏览器列表”。

以下是在 `package.json` 中指定的示例 `browserslist`：

```json
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```

> 请注意，这不会自动为您包含 polyfill。您仍然需要根据您支持的浏览器根据需要填充语言功能（见上文）。

> 编辑 `browserslist` 配置时，您可能会注意到您的更改不会立即生效。这是由于 [babel-loader 中的问题](https://github.com/babel/babel-loader/issues/690) 未检测到您的 `package.json` 中的更改。一个快速的解决方案是删除 `node_modules/.cache` 文件夹并重试。
