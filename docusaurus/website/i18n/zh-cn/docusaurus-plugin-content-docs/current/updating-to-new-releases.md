---
id: updating-to-new-releases
title: 更新到新版本
---

`Reactseed` 主要分为三个包：

- `@reactseed/cli` 是一个全局命令行实用程序，可用于创建新项目。
- `react-scripts` 是生成项目的开发依赖项。
- `@craco/craco` 是扩展 webpack 配置的开发依赖项。

当您运行 `npx @reactseed/cli init` 时，它会自动安装最新版本的 `Reactseed`。

> 如果您之前通过 `npm install -g @reactseed/cli` 全局安装了 `@reactseed/cli`，请访问 [Getting Started](getting-started.md) 了解当前安装步骤。

`Reactseed` 使用最新版本的 `react-scripts` 创建项目，因此您将自动获得新创建的应用程序中的所有新功能和改进。

要将现有项目更新为 `react-scripts` 的新版本，[打开更改日志](https://github.com/facebook/create-react-app/blob/main/CHANGELOG.md)，找到版本您当前正在使用（如果不确定，请检查此文件夹中的 `package.json`），并为较新版本应用迁移说明。

在大多数情况下，在 `package.json` 中添加 `react-scripts` 版本并在此文件夹中运行 `npm install`（或 `yarn install`）就足够了，但最好查阅 [更新日志](https://github.com/facebook/create-react-app/blob/main/CHANGELOG.md) 了解潜在的重大更改。

我们承诺将破坏性更改保持最小，以便您可以轻松升级 `Reactseed`。
