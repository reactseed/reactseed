---
id: code-splitting
title: 代码拆分
---

无需在用户使用之前下载整个应用程序，代码拆分允许您将代码拆分成小块，然后您可以按需加载。

此项目设置支持通过 [dynamic `import()`](https://2ality.com/2017/01/import-operator.html#loading-code-on-demand) 进行代码拆分。 它的 [proposal](https://github.com/tc39/proposal-dynamic-import) 处于第 4 阶段。类 `import()` 函数形式将模块名称作为参数并返回 [`Promise` ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 总是解析为模块的命名空间对象。

这是一个例子：

## `moduleA.js`

```js
const moduleA = "Hello";

export { moduleA };
```

## `App.js`

```js
import React, { Component } from "react";

class App extends Component {
  handleClick = () => {
    import("./moduleA")
      .then(({ moduleA }) => {
        // Use moduleA
      })
      .catch((err) => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
      </div>
    );
  }
}

export default App;
```

这将使 `moduleA.js` 及其所有唯一依赖项成为一个单独的块，仅在用户单击“加载”按钮后才加载。 有关创建的块的更多信息，请参阅 [production build](production-build.md) 部分。

如果您愿意，也可以将它与 `async` / `await` 语法一起使用。

## React Router

如果您使用 React Router，请查看 [本教程](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting)

另请查看 React 文档中的 [代码拆分](https://reactjs.org/docs/code-splitting.html) 部分。
