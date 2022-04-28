---
id: available-scripts
title: 内置命令
---

在项目目录中，您可以运行：

### `npm start` 或 `yarn start`

在开发模式下运行应用程序。
打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看。

如果您进行编辑，该页面将重新加载。
您还将在控制台中看到 `lint` 错误。

### `npm test` 或 `yarn test`

在交互式监视模式下启动测试运行程序。
有关详细信息，请参阅有关 [运行测试](./running-tests) 的部分。

### `npm run build` 或 `yarn build`

将用于生产的应用程序构建到 build 文件夹。
它在生产模式下正确捆绑 React 并优化构建以获得最佳性能。

构建产物被压缩并且文件名包含哈希。
您的应用已准备好部署！

有关详细信息，请参阅有关 [部署](./deployment) 的部分。

### `npm run analyze` 或 `yarn analyze`

使用 `source maps` 分析 JavaScript 构建产物。

> 分析前需要运行`npm run build` 或`yarn build`。
