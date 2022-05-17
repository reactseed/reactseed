---
id: adding-images-fonts-and-files
title: 添加图片、字体、文件
---

使用 webpack，使用图像和字体等静态资源的工作方式与 CSS 类似。

您可以在 JavaScript 模块中**`import` 一个文件**。这告诉 webpack 将该文件包含在包中。与 CSS 导入不同，导入文件会为您提供一个字符串值。该值是您可以在代码中引用的最终路径，例如作为图像的 `src`属性或 PDF 链接的 `href`。

为了减少对服务器的请求数量，导入小于 `10,000` 字节的图像会返回 [data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)的一条路径。这适用于以下文件扩展名：bmp、gif、jpg、jpeg 和 png。由于 [#1153](https://github.com/facebook/create-react-app/issues/1153)，SVG 文件被排除在外。您可以通过设置 `IMAGE_INLINE_SIZE_LIMIT` 环境变量来控制 `10,000` 字节阈值。

Here is an example:

```js
import React from "react";
import logo from "./logo.png"; // 告诉 webpack 这个 JS 文件使用这个图片

console.log(logo); // /logo.84287d09.png

function Header() {
  // 导入结果是你的图片的 URL
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

这确保了在项目构建时，webpack 将正确地将图像移动到构建文件夹中，并为我们提供正确的路径。

这也适用于 CSS：

```css
.Logo {
  background-image: url(./logo.png);
}
```

webpack 在 CSS 中查找所有相关模块引用（它们以 `./` 开头）并将它们替换为编译包中的最终路径。如果您打错字或不小心删除了重要文件，您将看到编译错误，例如当您导入不存在的 JavaScript 模块时。编译包中的最终文件名是由 webpack 从内容哈希生成的。如果将来文件内容发生变化，webpack 会在生产中给它一个不同的名称，这样你就不用担心资产的长期缓存。

请注意，这也是 webpack 的自定义功能。

下一节将介绍另一种处理静态资产的方法。

## 添加 SVG

上一节中描述了一种添加 SVG 文件的方法。你也可以直接将 SVG 导入为 React 组件。您可以使用这两种方法中的任何一种。在您的代码中，它看起来像这样：

```js
import { ReactComponent as Logo } from "./logo.svg";

function App() {
  return (
    <div>
      {/* Logo 是一个真实的 React 组件 */}
      <Logo />
    </div>
  );
}
```

如果您不想将 SVG 作为单独的文件加载，这很方便。不要忘记导入中的花括号！ `ReactComponent` 导入名称很重要，它告诉 Create React App 你想要一个渲染 SVG 的 React 组件，而不是它的文件名。

> **提示：** 导入的 SVG React 组件接受 `title` 道具以及 `svg` 元素接受的其他属性。使用此属性为您的 svg 组件添加可访问的标题。
