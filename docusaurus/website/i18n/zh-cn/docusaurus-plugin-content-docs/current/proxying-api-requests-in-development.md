---
id: proxying-api-requests-in-development
title: Proxying API Requests in Development
sidebar_label: Proxying in Development
---

人们经常从与后端实现相同的主机和端口为前端 React 应用程序提供服务。

例如，部署应用程序后的生产设置可能如下所示：

    /             - 静态服务器使用 React 应用程序返回 index.html
    /todos        - 静态服务器使用 React 应用程序返回 index.html
    /api/todos    - 服务器使用后端实现处理任何 /api/* 请求

**不需要**此类设置。但是，如果你**做**有这样的设置，编写类似 `fetch('/api/todos')` 的请求会很方便，而不必担心在开发过程中将它们重定向到另一个主机或端口。

要告诉开发服务器将任何未知请求代理到您的 API 服务器，请在您的 `package.json` 中添加一个 `proxy` 字段，例如：

```json
  "proxy": "http://localhost:4000",
```

这样，当你在开发中 `fetch('/api/todos')` 时，开发服务器会识别出它不是静态资源，并将你的请求代理到 `http://localhost:4000/api/todos`王牌后备。开发服务器将**仅**尝试将其 `Accept` 标头中没有 `text/html` 的请求发送到代理。

方便的是，这避免了 [CORS 问题](https://stackoverflow.com/questions/21854516/understanding-ajax-cors-and-security-considerations) 和开发中这样的错误消息：

```

Fetch API cannot load http://localhost:4000/api/todos. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

请记住，`proxy` 仅在开发中有效（使用 `npm start`），您需要确保像 `/api/todos` 这样的 URL 指向生产中的正确内容。您不必使用 `/api` 前缀。任何没有 `text/html` 接受标头的无法识别的请求都将被重定向到指定的 `proxy`。

`proxy` 选项支持 HTTP、HTTPS 和 WebSocket 连接。

如果 `proxy` 选项对您来说\*\*不够灵活，您也可以：

- [手动配置代理](#手动配置代理)
- 在您的服务器上启用 CORS（[这里是如何为 Express 做的](https://enable-cors.org/server_expressjs.html)）。
- 使用 [环境变量](adding-custom-environment-variables.md) 将正确的服务器主机和端口注入您的应用程序。

## 配置代理后出现“Invalid Host Header”错误

当您启用 `proxy` 选项时，您会选择一组更严格的主机检查。这是必要的，因为让后端对远程主机开放会使您的计算机容易受到 DNS 重新绑定攻击。这个问题在[这篇文章](https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a)和[这个问题](https://github.com/webpack/ webpack-dev-server/issues/887）。

在 `localhost` 上开发时，这不会影响您，但是如果您像 [在此处描述](https://github.com/facebook/create-react-app/issues/2271) 进行远程开发，您将看到此错误启用 `proxy` 选项后在浏览器中：

> Invalid Host header

要解决此问题，您可以在项目根目录中名为 `.env.development` 的文件中指定公共开发 Host：

```
HOST=mypublicdevhost.com
```

如果您现在重新启动开发服务器并从指定主机加载应用程序，它应该可以工作。

如果您仍然遇到问题，或者您正在使用更奇特的环境（如云编辑器），您可以通过在 `.env.development.local` 中添加一行来完全绕过主机检查。 **请注意，这是危险的，并且会使您的计算机暴露在来自恶意网站的远程代码执行中：**

```
# 注意：这很危险！
# 它会使您的机器受到来自您访问的网站的攻击。
DANGEROUSLY_DISABLE_HOST_CHECK=true
```

我们不推荐这种方法。

## 手动配置代理

如果 `proxy` 选项对您来说不够灵活，您可以直接访问 Express 应用程序实例并连接您自己的代理中间件。

您可以将此功能与 `package.json` 中的 `proxy` 属性结合使用，但建议您将所有逻辑合并到 `src/setupProxy.js` 中。

默认情况下，`Reactseed` 使用 [mocker-api](https://www.npmjs.com/package/mocker-api) 处理代理。

您现在可以根据需要注册代理了！这是一个使用上述 `mocker-api` 的示例：

- src/setupProxy.js

```js
import mocker from "mocker-api";
import { resolve } from "path";

module.exports = function (app) {
  mocker(app, resolve("./mock/app"), {
    proxy: {
      "/api": "https://api.github.com",
    },
    changeHost: true,
  });
};
```

- mock/app.js

```js
import packageJSON from "../package.json";

const api = {
  [`GET /api/app`]: packageJSON,
};

export default api;
```

现在您可以通过访问 [localhost:3000/api/app](localhost:3000/api/app) 获取代理数据。

> **注意：** 您无需在任何地方导入此文件。 当您启动开发服务器时，它会自动注册。

> **注意：** 此文件仅支持 Node 的 JavaScript 语法。 确保只使用受支持的语言功能（即不支持 Flow、ES 模块等）。

> **注意：** 将路径传递给代理函数允许您在路径上使用通配符和/或模式匹配，这比快速路由匹配更灵活。

```

```
