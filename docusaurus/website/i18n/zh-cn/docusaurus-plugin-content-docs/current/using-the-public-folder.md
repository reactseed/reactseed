---
id: using-the-public-folder
title: 使用 public 文件夹
---

## 更改 HTML

`public` 文件夹包含 HTML 文件，因此您可以对其进行调整，例如，[设置页面标题](title-and-meta-tags.md)。
编译代码的`<script>`标签将在构建过程中自动添加到其中。

## 在模块系统之外添加资源

您还可以将其他资源添加到`public`文件夹。

请注意，我们通常鼓励您在 JavaScript 文件中 `import`资源。
例如，请参阅 [添加 CSS](adding-a-stylesheet.md) 和 [添加图像和字体](adding-images-fonts-and-files.md) 部分。
这种机制提供了许多好处：

- 脚本和样式表被缩小并捆绑在一起，以避免额外的网络请求。
- 丢失文件会导致编译错误，而不是用户的 404 错误。
- 结果文件名包含内容哈希，因此您无需担心浏览器缓存其旧版本。

但是，您可以使用 **escape hatch** 在模块系统之外添加资源。

如果你把一个文件放到 `public` 文件夹中，它不会被 webpack 处理。相反，它将被原封不动地复制到构建文件夹中。要引用 `public` 文件夹中的资源，您需要使用名为 `PUBLIC_URL` 的环境变量。

在 `index.html` 中，您可以像这样使用它：

```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```

只有 `public` 文件夹中的文件才能通过 `%PUBLIC_URL%` 前缀访问。如果您需要使用来自 `src` 或 `node_modules` 的文件，则必须将其复制到那里以明确指定您打算使该文件成为构建的一部分。

当您运行 `npm run build` 时，`Reactseed` 将用正确的绝对路径替换 `%PUBLIC_URL%`，因此即使您使用客户端路由或将其托管在非根 URL 上，您的项目也能正常工作。

在 JavaScript 代码中，您可以将 `process.env.PUBLIC_URL` 用于类似目的：

```js
render() {
  // 注意：这是一个 escape hatch，应该谨慎使用！
  // 通常我们建议使用 `import` 来获取资源 URL
  // 如本节上方的“添加图像和字体”中所述。
  return <img src={process.env.PUBLIC_URL + '/img/logo.png'} />;
}
```

请记住这种方法的缺点：

- `public` 文件夹中的所有文件都没有经过后处理或压缩。
- 缺少的文件不会在编译时被调用，并且会给您的用户造成 404 错误。
- 结果文件名不包含内容哈希，因此您需要在每次更改时添加查询参数或重命名它们。

## 何时使用 `public` 文件夹

通常我们建议从 JavaScript 导入 [CSS](adding-a-stylesheet.md)、[图片和文字](adding-images-fonts-and-files.md)。
`public` 文件夹对于一些不太常见的情况很有用：

- 您需要在构建输出中具有特定名称的文件，例如 [`manifest.webmanifest`](https://developer.mozilla.org/en-US/docs/Web/Manifest)。
- 您有成千上万的图像，需要动态引用它们的路径。
- 您想在捆绑代码之外包含一个小脚本，例如 [`pace.js`](https://github.com/CodeByZach/pace)。
- 某些库可能与 webpack 不兼容，您别无选择，只能将其包含为 `<script>` 标记。

请注意，如果添加声明全局变量的 `<script>`，则应阅读下一节中的主题 [使用全局变量](using-global-variables.md)，该主题解释了如何引用它们。
