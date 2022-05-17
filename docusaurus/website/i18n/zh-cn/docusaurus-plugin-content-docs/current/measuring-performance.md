---
id: measuring-performance
title: 性能测量
---

默认情况下，`Reactseed` 包含一个性能中继器，允许您测量和分析
使用不同指标的应用程序性能。

要测量任何受支持的指标，您只需将一个函数传递到 `reportWebVitals`
`index.js` 中的函数：

```js
reportWebVitals(console.log);
```

当任何指标的最终值在页。您可以使用它将任何结果记录到控制台或发送到特定端点。

## Web Vitals

[Web Vitals](https://web.dev/vitals/) 是一组旨在捕获用户的有用指标
网页体验。在 `Reactseed` 中，使用第三方库来衡量这些
指标（[web-vitals](https://github.com/GoogleChrome/web-vitals)）。

要了解有关在计算度量值时返回给函数的对象的更多信息，
请参阅[文档](https://github.com/GoogleChrome/web-vitals/#types)。 [浏览器
支持](https://github.com/GoogleChrome/web-vitals/#browser-support) 部分还解释了支持哪些浏览器。

## 结果分析

使用 `reportWebVitals` 函数，您可以将任何结果发送到分析端点，以衡量和跟踪您网站上的真实用户表现。例如：

```js
function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  const url = "https://example.com/analytics";

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: "POST", keepalive: true });
  }
}

reportWebVitals(sendToAnalytics);
```

> **注意：** 如果您使用 Google Analytics，请使用 `id` 值以更轻松地手动构建指标分布（计算百分位数等）。
>
> ```js
> function sendToAnalytics({ id, name, value }) {
>   ga("send", "event", {
>     eventCategory: "Web Vitals",
>     eventAction: name,
>     eventValue: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
>     eventLabel: id, // id unique to current page load
>     nonInteraction: true, // avoids affecting bounce rate
>   });
> }
>
> reportWebVitals(sendToAnalytics);
> ```
>
> 阅读更多关于将结果发送到 Google Analytics [这里](https://github.com/GoogleChrome/web-vitals#send-the-results-to-google-analytics)。
