---
id: getting-started
title: 开始使用
---

`ReactSeed` 是创建单页 `React` 应用程序的最佳实践。它基于 [Create React App](https://github.com/facebook/create-react-app) 进行了扩展。

### 在线尝试

你可以在 ⚡️ [`stackblitz`](https://stackblitz.com/) 上在线试用 `ReactSeed`。它在浏览器中运行，因此几乎与本地设置相同，但不需要在您的机器上安装任何东西。

支持的模板预设有：

- [Default Template](https://stackblitz.com/edit/reactseed-template)
- [Ant Design Template](https://stackblitz.com/edit/reactseed-template-antd)
- [Ant Design Template with i18n](https://stackblitz.com/edit/reactseed-template-antd-i18n)
- [Ant Design Template with vite](https://stackblitz.com/edit/reactseed-template-antd-vite)

### 快速开始

```sh
npx @reactseed/cli init
npm start
```

> 如果您使用 npm 5.1 或更早版本，则不能使用 `npx`。因此请全局安装 `@reactseed/cli`：

```sh
npm install -g @reactseed/cli
```

> 现在您可以运行：

```sh
reactseed init
```

然后打开 [http://localhost:3000/](http://localhost:3000/) 来查看您的应用程序。

当您准备好部署到生产环境时，使用 `npm run build` 创建一个压缩包。

### 立即开始

你**不需要**安装或配置 webpack 或 Babel 之类的工具。
它们是预先配置和隐藏的，因此您可以专注于代码。

## 创建 `React` 应用

**您需要在本地开发机器上安装 Node 8.16.0 或 Node 10.16.0 或更高版本**（但服务器上不需要）。您可以使用 [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) 在不同项目之间切换 Node 版本。

要创建新应用，您可以选择以下方法之一：

### npx 安装

```sh
npx @reactseed/cli init
```

#### 项目名称

输入您的项目名称，默认为当前文件夹名。

```
? Your project name? (Default to current folder name) ()
```

#### 选择模板

```sh
? The template you want to use?
  ❯ Defalut Template
    Ant Design Template (useRedux + useRequest)
    Ant Design Template using Vite (useRedux + useRequest)
    Ant Design Template (useRedux + useRequest + LinguiJs)
```

支持的模板预设有：

- Default Template
- Ant Design Template
- Ant Design Template with i18n
- Ant Design Template with vite

#### 选择包管理

`ReactSeed` 将使用 `Yarn` 或 `npm` 来安装依赖项，默认使用 `Yarn`。 例如：

```sh
? Whether to install dependencies? (Y/n)
? Use Yarn? (Y/n)
```

### 输出

运行这些命令中的任何一个都会在当前文件夹中创建一个名为`my-app`的目录。在该目录中，它将生成初始项目结构并安装传递依赖项：

```
my-app
├── public
├── src
│   ├── components
│   ├── pages
│   ├── routes
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── react.d.ts
│   ├── reportWebVitals.ts
│   ├── router.tsx
│   ├── setupTests.ts
│   └── setupProxy.js
├── .env
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierrc
├── .stylelintrc
├── craco.config.ts
├── README.md
├── tsconfig.json
└── package.json
```

安装完成后，您可以打开项目文件夹：

```
cd my-app
```

在新创建的项目中，您可以运行一些内置命令：

### `npm start` 或 `yarn start`

在开发模式下运行应用程序。
打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看。

如果您进行编辑，该页面将重新加载。
您还将在控制台中看到 `lint` 错误。

### `npm test` 或 `yarn test`

在交互式监视模式下启动测试运行程序。
有关详细信息，请参阅有关 [运行测试](https://create-react-app.dev/docs/running-tests/) 的部分。

### `npm run build` 或 `yarn build`

将用于生产的应用程序构建到 build 文件夹。
它在生产模式下正确捆绑 React 并优化构建以获得最佳性能。

构建产物被压缩并且文件名包含哈希。
您的应用已准备好部署！

有关详细信息，请参阅有关 [部署](https://create-react-app.dev/docs/deployment/) 的部分。

### `npm run analyze` 或 `yarn analyze`

使用 `source maps` 分析 JavaScript 构建产物。

> 分析前需要运行`npm run build` 或`yarn build`。
