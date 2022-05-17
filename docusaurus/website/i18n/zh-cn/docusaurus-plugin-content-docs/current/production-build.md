---
id: production-build
title: 构建生产版本
---

`npm run build` 创建一个 `build` 目录，其中包含您应用的生产版本。 `build/static` 目录中将是您的 JavaScript 和 CSS 文件。 `build/static` 中的每个文件名都将包含文件内容的唯一哈希。文件名中的此哈希启用 [长期缓存技术](#static-file-caching)。

当运行新创建的 `Reactseed` 应用程序的生产构建时，会生成许多 `.js` 文件（称为 _chunks_）并放置在 `build/static/js` 目录中：

`main.[hash].chunk.js`

- 这是您的应用程序代码。 `App.js` 等

`[数字].[哈希].chunk.js`

- 这些文件可以是*vendor* 代码，也可以是[代码拆分块](code-splitting.md)。 _Vendor_ 代码包括您从 `node_modules` 中导入的模块。拆分 _vendor_ 和 _application_ 代码的潜在优势之一是启用 [长期缓存技术](#static-file-caching) 以提高应用程序加载性能。由于 _vendor_ 代码的更改频率往往低于实际的 _application_ 代码，因此浏览器将能够单独缓存它们，并且不会在每次应用程序代码更改时重新下载它们。

`runtime-main.[hash].js`

- 这是 [webpack 运行时](https://webpack.js.org/configuration/optimization/#optimization-runtimechunk) 逻辑的一小部分，用于加载和运行您的应用程序。默认情况下，此内容将嵌入到您的 `build/index.html` 文件中，以保存额外的网络请求。您可以通过在我们的 `高级配置` 中指定 `INLINE_RUNTIME_CHUNK=false` 来选择退出，这将加载此块而不是将其嵌入到您的 `index.html` 中。

如果您使用 [代码拆分](code-splitting.md) 来拆分您的应用程序，这也会在 `build/static` 文件夹中创建额外的块。

## 静态文件缓存

`build/static` 目录中的每个文件都将有一个唯一的哈希附加到基于文件内容生成的文件名上，这允许您使用[积极缓存技术](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#invalidating_and_updating_cached_responses)以避免在文件内容未更改的情况下浏览器重新下载您的资产。如果在后续构建中文件的内容发生更改，则生成的文件名哈希将不同。

为了向您的用户提供最佳性能，最佳做法是为 `index.html` 以及 `build/static` 中的文件指定一个 `Cache-Control` 标头。此标头允许您控制浏览器和 CDN 缓存静态资产的时间长度。如果您不熟悉 `Cache-Control` 的作用，请参阅 [这篇文章](https://jakearchibald.com/2016/caching-best-practices/) 以获得很好的介绍。

对您的 `build/static` 资产使用 `Cache-Control: max-age=31536000`，对其他一切使用 `Cache-Control: no-cache` 是一个安全有效的起点，可确保用户的浏览器始终检查更新的 `index.html` 文件，并将缓存所有 `build/static` 文件一年。请注意，您可以安全地在 `build/static` 上使用一年到期，因为文件内容哈希嵌入到文件名中。

## 分析

ReactDOM 在 v16.5+ 的开发模式下自动支持分析，但由于分析增加了一些小
额外的开销是选择加入生产模式。您可以使用 `--profile` 标志选择加入。使用 `npm run build -- --profile` 或 `yarn build --profile` 在生产构建中启用分析。有关分析的详细信息，请参阅 [React 文档](https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler)
使用 React DevTools。
