---
id: folder-structure
title: 文件结构
---

创建后，您的项目应如下所示：

```
my-app
├── public
├── src
│ ├── components
│ ├── pages
│ ├── routes
│ ├── index.tsx
│ ├── react-app-env.d.ts
│ ├── react.d.ts
│ ├── reportWebVitals.ts
│ ├── router.tsx
│ ├── setupTests.ts
│ └── setupProxy.js
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

对于要构建的项目，**这些文件必须以准确的文件名存在**：

- `public/index.html` 是页面模板。
- `src/index.tsx` 是 JavaScript 的入口。
- `craco.config.ts` 用于扩展 `webpack` 配置。
- `tsconfig.json` 是打字稿配置。

您可以删除或重命名其他文件。

您可以在 `src` 中创建子目录。 为了更快地重建，webpack 只处理 `src` 中的文件。 你需要**将任何 JS 和 CSS 文件放在 `src`** 中，否则 webpack 将识别不到它们。

只有 `public` 中的文件可以从 `public/index.html` 中使用。 阅读以下关于使用 JavaScript 和 HTML 资源的说明。

但是，您可以创建更多顶级目录。 它们不会包含在生产版本中，因此您可以将它们用于文档等内容。

如果您安装了 Git 并且您的项目不是较大存储库的一部分，那么将初始化一个新存储库，从而生成一个额外的顶级 `.git` 目录。
