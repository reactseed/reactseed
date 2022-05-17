---
id: running-tests
title: 运行测试
---

`Reactseed` 使用 [Jest](https://jestjs.io/) 作为其测试运行器。为了准备这种集成，我们对 Jest 进行了[重大改造](https://jestjs.io/blog/2016/09/01/jest-15.html)，所以如果你几年前听说过它的坏消息，请给再试一次。

Jest 是一个基于节点的运行器。这意味着测试总是在 Node 环境中运行，而不是在真正的浏览器中。这使我们能够实现更快的迭代速度并防止片状。

由于 [jsdom](https://github.com/tmpvar/jsdom)，Jest 提供了诸如 `window` 之类的浏览器全局变量，但它们只是真实浏览器行为的近似值。 Jest 旨在用于逻辑和组件的单元测试，而不是 DOM 怪癖。

如果需要，我们建议您使用单独的工具进行浏览器端到端测试。它们超出了 `Reactseed` 的范围。

## 文件名约定

Jest 将查找具有以下任何流行命名约定的测试文件：

- `__tests__` 文件夹中带有 `.js` 后缀的文件。
- 带有 `.test.js` 后缀的文件。
- 带有 `.spec.js` 后缀的文件。

`.test.js` / `.spec.js` 文件（或 `__tests__` 文件夹）可以位于 `src` 顶级文件夹下的任意深度。

我们建议将测试文件（或 `__tests__` 文件夹）放在他们正在测试的代码旁边，以便相对导入看起来更短。例如，如果 `App.test.js` 和 `App.js` 在同一个文件夹中，则测试只需要 `import App from './App'`，而不是长的相对路径。搭配还有助于在大型项目中更快地找到测试。

## 命令行界面

当您运行 `npm test` 时，Jest 将以观看模式启动<sup>\*</sup>。每次保存文件时，它都会重新运行测试，例如 `npm start` 如何重新编译代码。

观察程序包括一个交互式命令行界面，能够运行所有测试或专注于搜索模式。它以这种方式设计，以便您可以保持打开状态并享受快速重新运行。您可以从每次运行后观察程序打印的“Watch Usage”注释中了解命令：

![笑话观看模式](https://jestjs.io/img/blog/15-watch.gif)

> \*尽管我们建议在开发期间以监视模式运行测试，但您可以通过传入 `--watchAll=false` 标志来禁用此行为。在大多数 CI 环境中，这是为您处理的（请参阅 [在 CI 服务器上](#on-ci-servers)）。

## 版本控制集成

默认情况下，当您运行 `npm test` 时，Jest 将仅运行与自上次提交以来更改的文件相关的测试。这是一项优化，旨在使您的测试无论您有多少测试都可以快速运行。但是，它假定您不经常提交未通过测试的代码。

Jest 总是会明确提到它只运行与自上次提交以来更改的文件相关的测试。您还可以在监视模式下按“a”来强制 Jest 运行所有测试。

Jest 将始终在 [持续集成](#continuous-integration) 服务器上运行所有测试，或者如果项目不在 Git 或 Mercurial 存储库中。

## 编写测试

要创建测试，请添加带有测试名称及其代码的 `it()`（或 `test()`）块。您可以选择将它们包装在 `describe()` 块中以进行逻辑分组，但这既不是必需的，也不是推荐的。

Jest 提供了一个内置的 `expect()` 全局函数来进行断言。基本测试可能如下所示：

```js
import sum from "./sum";

it("sums numbers", () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

Jest 支持的所有 `expect()` 匹配器都[在此处广泛记录](https://jestjs.io/docs/en/expect.html#content)。

您还可以使用 [`jest.fn()` 和 `expect(fn).toBeCalled()`](https://jestjs.io/docs/en/expect.html#tohavebeencall) 创建“间谍”或模拟职能。

## 测试组件

有广泛的组件测试技术。它们的范围从验证组件是否在不抛出的情况下渲染的“冒烟测试”，到浅层渲染和测试一些输出，再到完整渲染和测试组件生命周期和状态变化。

不同的项目根据组件更改的频率以及它们包含多少逻辑来选择不同的测试权衡。如果您尚未决定测试策略，我们建议您从为组件创建基本冒烟测试开始：

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
```

此测试安装一个组件并确保它在渲染期间没有抛出。像这样的测试只需很少的努力就可以提供很多价值，因此它们是很好的起点，这就是您可以在 `src/App.test.js` 中找到的测试。

当您遇到由更改组件引起的错误时，您将更深入地了解其中哪些部分值得在您的应用程序中进行测试。这可能是引入更具体的测试断言特定预期输出的好时机。
