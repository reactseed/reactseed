---
id: adding-a-stylesheet
title: 添加 CSS
---

此项目设置使用 [webpack](https://webpack.js.org/) 来处理所有资源。 `webpack` 提供了一种自定义方式来扩展 JavaScript 之外的 `import` 概念。要表达 JavaScript 文件依赖于 CSS 文件，您需要**从 JavaScript 文件中导入 CSS**：

## `Button.css`

```css
.Button {
  padding: 20px;
}
```

## `Button.tsx`

```tsx
import React, { Component } from "react";
import "./Button.css"; // 告诉 webpack Button.tsx 使用这些样式

class Button extends Component {
  render() {
    // 您可以将它们用作常规 CSS 样式
    return <div className="Button" />;
  }
}
```

**这对 React 来说不是必需的**，但是很多人觉得这个功能很方便。您可以在 [此处](https://medium.com/seek-blog/block-element-modifying-your-javascript-components-d7f99fcab52b) 了解这种方法的好处。但是，您应该知道，与 `webpack` 相比，这会使您的代码对其他构建工具和环境的可移植性降低。

在开发中，以这种方式表达依赖关系允许您在编辑样式时即时重新加载样式。在生产中，所有 CSS 文件将在构建输出中连接成一个压缩的“.css”文件。

如果您担心使用特定于 webpack 的语义，您可以将所有 CSS 直接放入 `src/index.css` 中。它仍然会从 `src/index.tsx` 导入，但如果您以后迁移到不同的构建工具，您总是可以删除该导入。
