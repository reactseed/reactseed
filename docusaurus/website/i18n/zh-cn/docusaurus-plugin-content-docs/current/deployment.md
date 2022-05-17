---
id: deployment
title: 部署
---

`npm run build` 创建一个 `build` 目录，其中包含您应用的生产版本。 设置您最喜欢的 HTTP 服务器，以便为您网站的访问者提供 `index.html`，并使用 `/static/js/main.<hash>.js` 等静态路径的请求提供服务静态`/static/js/main.<hash>.js` 文件。 有关详细信息，请参阅 [生产构建](production-build.md) 部分。

## 静态服务器

对于使用 [Node](https://nodejs.org/) 的环境，处理此问题的最简单方法是安装 [serve](https://github.com/vercel/serve) 并让它处理其余的：

```sh
npm install -g serve
serve -s build
```

上面显示的最后一个命令将在端口 **3000** 上为您的静态站点提供服务。 像许多 [serve](https://github.com/vercel/serve) 的内部设置一样，可以使用 `-l` 或 `--listen` 标志调整端口：

```sh
serve -s build -l 4000
```

运行此命令以获取可用选项的完整列表：

```sh
serve -h
```

## 其他解决方案

您不一定需要静态服务器才能在生产环境中运行 `Reactseed` 项目。 当集成到现有的服务器端应用程序中时，它也能很好地工作。

这是一个使用 [Node](https://nodejs.org/) 和 [Express](https://expressjs.com/) 的程序示例：

```javascript
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(9000);
```

服务器软件的选择也不重要。 由于 `Reactseed` 完全与平台无关，因此无需显式使用 Node.js。

带有静态资产的 `build` 文件夹是 `Reactseed` 生成的唯一输出。

但是，如果您使用客户端路由，这还不够。 如果你想在你的单页应用程序中支持像 `/todos/42` 这样的 URL，请阅读下一节。

## 使用客户端路由服务应用程序

如果您使用在底层使用 HTML5 [`pushState` 历史 API](https://developer.mozilla.org/en-US/docs/Web/API/History_API#Adding_and_modifying_history_entries) 的路由器（例如，[React Router ](https://github.com/ReactTraining/react-router) 与 `browserHistory`)，许多静态文件服务器将失败。 例如，如果您将 React Router 与 `/all/42` 的路由一起使用，则开发服务器将正确响应 `localhost:3000/all/42`，但为上述生产构建提供服务的 Express 则不会。

这是因为当 `/all/42` 有新的页面加载时，服务器会查找文件 `build/all/42` 并没有找到它。 服务器需要配置为通过提供 `index.html` 来响应对 `/all/42` 的请求。 例如，我们可以修改上面的 Express 示例，为任何未知路径提供 `index.html`：

```diff
 app.use(express.static(path.join(__dirname, 'build')));

-app.get('/', function (req, res) {
+app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
```

如果您使用的是 [Apache HTTP Server](https://httpd.apache.org/)，您需要在 `public` 文件夹中创建一个 `.htaccess` 文件，如下所示：

```
    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
```

当您运行 `npm run build` 时，它将被复制到 `build` 文件夹。

如果您使用的是 [Apache Tomcat](https://tomcat.apache.org/)，则需要遵循 [this Stack Overflow answer](https://stackoverflow.com/a/41249464/4878474)。

现在对`/todos/42`的请求将在开发和生产中得到正确处理。

在生产版本中，
[service worker](https://developers.google.com/web/fundamentals/primers/service-workers/) 将自动处理所有导航请求，例如
`/all/42`，通过提供 `index.html` 的缓存副本。可以通过以下方式配置或禁用此 Service Worker 导航路由
[`eject`ing](available-scripts.md#npm-run-eject) 然后修改
[`navigateFallback`](https://github.com/GoogleChrome/sw-precache#navigatefallback-string)
和 [`navigateFallbackWhitelist`](https://github.com/GoogleChrome/sw-precache#navigatefallbackwhitelist-arrayregexp)
`SWPrecachePlugin` 配置的选项。

当用户将您的应用程序安装到他们设备的主屏幕时，默认配置将创建一个指向 `/index.html` 的快捷方式。 这可能不适用于期望从 `/` 提供应用程序的客户端路由器。 在 `public/manifest.json` 编辑 web 应用程序清单并更改 `start_url` 以匹配所需的 URL 方案，例如：

```js
  "start_url": ".",
```

## 构建相对路径

默认情况下，`Reactseed` 会生成一个构建，假设您的应用程序托管在服务器根目录中。

要覆盖它，请在 `package.json` 中指定 `homepage`，例如：

```js
  "homepage": "http://mywebsite.com/relativepath",
```

这将使 `Reactseed` 正确推断要在生成的 HTML 文件中使用的根路径。

```js
<BrowserRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="/calendar/today">
```

### 从不同的路径提供相同的构建

如果您不使用 HTML5 `pushState` 历史 API 或根本不使用客户端路由，则无需指定将提供应用程序的 URL。 相反，你可以把它放在你的 `package.json` 中：

```js
  "homepage": ".",
```

这将确保所有资产路径都相对于 `index.html`。 然后，您将能够将您的应用程序从`http://mywebsite.com`移动到`http://mywebsite.com/relativepath`甚至`http://mywebsite.com/relative/path`，而无需重新构建产物。

## 为任意构建环境自定义环境变量

您可以通过创建自定义 `.env` 文件并使用 [env-cmd](https://www.npmjs.com/package/env-cmd) 加载它来创建任意构建环境。

例如，要为暂存环境创建构建环境：

1. 创建一个名为 `.env.staging` 的文件
1. 像设置任何其他 `.env` 文件一样设置环境变量（例如 `REACT_APP_API_URL=http://api-staging.example.com`)
1. 安装[env-cmd](https://www.npmjs.com/package/env-cmd)

   ```sh
   $ npm install env-cmd --save
   $ # or
   $ yarn add env-cmd
   ```

1. 将新脚本添加到您的 `package.json` 中，使用您的新环境构建：

   ```json
   {
     "scripts": {
       "build:staging": "env-cmd -f .env.staging npm run build"
     }
   }
   ```

现在您可以运行 `npm run build:staging` 以使用暂存环境配置进行构建。
您可以以相同的方式指定其他环境。

`.env.production` 中的变量将用作后备，因为`NODE_ENV` 将始终设置为 `production` 进行构建。

## [AWS Amplify](https://console.amplify.aws)

AWS Amplify 控制台为具有无服务器后端的现代 Web 应用程序（单页应用程序和静态站点生成器）提供持续部署和托管。 Amplify 控制台提供全球可用的 CDN、自定义域设置、功能分支部署和密码保护。

1. [此处](https://console.aws.amazon.com/amplify/home) 登录 Amplify 控制台。
1. 连接你的 `Reactseed` 存储库并选择一个分支。如果您正在寻找 `Reactseed`+Amplify 启动器，请尝试 [create-react-app-auth-amplify 启动器](https://github.com/swaminator/create-react-app-auth-amplify)演示在 10 分钟内使用“Reactseed”设置身份验证。
1. Amplify 控制台自动检测构建设置。选择下一步。
1. 选择*保存并部署*。

如果构建成功，应用程序将部署并托管在具有 amplifyapp.com 域的全球 CDN 上。您现在可以不断地将更改部署到您的前端或后端。持续部署允许开发人员在每次代码提交到他们的 Git 存储库时将更新部署到他们的前端和后端。

## [Azure](https://azure.microsoft.com/)

Azure 静态 Web 应用程序为由 GitHub Actions 提供支持的 React 应用程序创建自动构建和部署管道。 默认情况下，应用程序是地理分布的，具有多个存在点。 PR 是为临时环境预览自动构建的。

1. 创建一个新的静态 Web 应用 [此处](https://ms.portal.azure.com/#create/Microsoft.StaticApp)。
1. 添加详细信息并连接到您的 GitHub 存储库。
1. 确保在“构建”选项卡上正确设置构建文件夹并创建资源。

Azure 静态 Web 应用程序将自动在您的存储库中配置 GitHub 操作并开始部署。

有关路由、API、身份验证和授权、自定义域等的更多信息，请参阅 [Azure 静态 Web 应用程序文档](https://aka.ms/swadocs)。

## [Firebase](https://firebase.google.com/)

如果您还没有安装 Firebase CLI，请运行 `npm install -g firebase-tools`。 注册一个 [Firebase 帐户](https://console.firebase.google.com/) 并创建一个新项目。 运行 `firebase login` 并使用您之前创建的 Firebase 帐户登录。

然后从项目的根目录运行 `firebase init` 命令。 您需要选择 **Hosting: Configure and deploy Firebase Hosting sites** 并选择您在上一步中创建的 Firebase 项目。 您需要同意创建 `database.rules.json`，选择 `build` 作为公共目录，并通过回复 `y` 同意**配置为单页应用程序**。

```sh
    === Project Setup

    First, let's associate this project directory with a Firebase project.
    You can create multiple project aliases by running firebase use --add,
    but for now we'll set up a default project.

    ? What Firebase project do you want to associate as default? Example app (example-app-fd690)

    === Database Setup

    Firebase Realtime Database Rules allow you to define how your data should be
    structured and when your data can be read from and written to.

    ? What file should be used for Database Rules? database.rules.json
    ✔  Database Rules for example-app-fd690 have been downloaded to database.rules.json.
    Future modifications to database.rules.json will update Database Rules when you run
    firebase deploy.

    === Hosting Setup

    Your public directory is the folder (relative to your project directory) that
    will contain Hosting assets to uploaded with firebase deploy. If you
    have a build process for your assets, use your build's output directory.

    ? What do you want to use as your public directory? build
    ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
    ✔  Wrote build/index.html

    i  Writing configuration info to firebase.json...
    i  Writing project information to .firebaserc...

    ✔  Firebase initialization complete!
```

重要提示：您需要在 `firebase.json` 文件中为 `service-worker.js` 文件设置正确的 HTTP 缓存标头，否则您将无法在首次部署后看到更改（[issue #2440](https://github .com/facebook/create-react-app/issues/2440)。 它应该添加到 `"hosting"` 键中，如下所示：

```json
{
  "hosting": {
    ...
    "headers": [
      {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
    ]
    ...
```

现在，在使用“npm run build”创建生产构建后，您可以通过运行`firebase deploy`来部署它。

```sh
    === Deploying to 'example-app-fd690'...

    i  deploying database, hosting
    ✔  database: rules ready to deploy.
    i  hosting: preparing build directory for upload...
    Uploading: [==============================          ] 75%✔  hosting: build folder uploaded successfully
    ✔  hosting: 8 files uploaded successfully
    i  starting release process (may take several minutes)...

    ✔  Deploy complete!

    Project Console: https://console.firebase.google.com/project/example-app-fd690/overview
    Hosting URL: https://example-app-fd690.firebaseapp.com
```

有关详细信息，请参阅 [Firebase 托管](https://firebase.google.com/docs/hosting)。

## [GitHub Pages](https://pages.github.com/)

### 第 1 步：将 `homepage` 添加到 `package.json`

**以下步骤很重要！**

**如果您跳过它，您的应用将无法正确部署。**

打开你的 `package.json` 并为你的项目添加一个 `homepage` 字段：

```json
  "homepage": "https://myusername.github.io/my-app",
```

或者对于 GitHub 用户页面：

```json
  "homepage": "https://myusername.github.io",
```

或自定义域页面：

```json
  "homepage": "https://mywebsite.com",
```

`Reactseed` 使用 `homepage` 字段来确定构建的 HTML 文件中的根 URL。

### 第 2 步：安装 `gh-pages` 并将 `deploy` 添加到 `package.json` 中的 `scripts`

现在，无论何时运行 `npm run build`，您都会看到一份备忘单，其中包含有关如何部署到 GitHub Pages 的说明。

要在 [https://myusername.github.io/my-app](https://myusername.github.io/my-app) 上发布它，请运行：

```sh
npm install --save gh-pages
```

或者，您可以使用 `yarn`：

```sh
yarn add gh-pages
```

在您的 `package.json` 中添加以下脚本：

```diff
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

`predeploy` 脚本会在 `deploy` 运行之前自动运行。

如果您要部署到 GitHub 用户页面而不是项目页面，则需要创建一个
附加修改：

1. 调整您的 `package.json` 脚本以将部署推送到 **master**：

```diff
  "scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",
```

### 第 3 步：通过运行 `npm run deploy` 部署站点

Then run:

```sh
npm run deploy
```

### 第 4 步：对于项目页面，确保项目的设置使用 `gh-pages`

最后，确保 GitHub 项目设置中的 **GitHub Pages** 选项设置为使用 `gh-pages` 分支：

<img src="https://i.imgur.com/HUjEr9l.png" width="500" alt="gh-pages branch setting" />

### 步骤 5：（可选）配置域

您可以通过将 `CNAME` 文件添加到 `public/` 文件夹来使用 GitHub Pages 配置自定义域。

您的 CNAME 文件应如下所示：

```
mywebsite.com
```

### 客户端路由注意事项

GitHub Pages 不支持在底层使用 HTML5 `pushState` 历史 API 的路由器（例如，使用 `browserHistory` 的 React 路由器）。这是因为当 `http://user.github.io/todomvc/todos/42` 这样的 url 重新加载页面时，其中 `/todos/42` 是前端路由，GitHub Pages 服务器返回 404 因为它对`/all/42`一无所知。如果您想将路由器添加到托管在 GitHub Pages 上的项目，这里有几个解决方案：

- 您可以从使用 HTML5 历史 API 切换到使用哈希路由。如果使用 React Router，可以切换到 `hashHistory` 来实现这个效果，但是 URL 会更长更冗长（例如，`http://user.github.io/todomvc/#/todos/42?_k =yknaj`）。 [阅读更多](https://reacttraining.com/react-router/web/api/Router) 关于 React Router 中不同的历史实现。
- 或者，您可以使用一个技巧来教 GitHub Pages 通过使用自定义重定向参数重定向到您的“index.html”页面来处理 404。在部署项目之前，您需要将带有重定向代码的 `404.html` 文件添加到`build`文件夹，并且需要将处理重定向参数的代码添加到`index.html`。您可以在 [in this guide](https://github.com/rafrex/eng-github-pages) 中找到该技术的详细说明。

### 故障排除

#### "/dev/tty: No such a device or address"

如果在部署时收到 `/dev/tty: No such a device or address` 或类似错误，请尝试以下操作：

1. 创建一个新的【个人访问令牌】(https://github.com/settings/tokens)
2. `git remote set-url origin https://<user>:<token>@github.com/<user>/<repo>`。
3. 再次尝试`npm run deploy`

#### "Cannot read property 'email' of null"

如果在部署时，您收到 `Cannot read property 'email' of null`，请尝试以下操作：

1. `git config --global user.name '<your_name>'`
2. `git config --global user.email '<your_email>'`
3. 再次尝试 `npm run deploy`

## [Heroku](https://www.heroku.com/)

您可以在 [使用零配置部署 React](https://blog.heroku.com/deploying-react-with-zero-configuration) 中找到说明。

### 解决 Heroku 部署错误

有时 `npm run build` 在本地工作，但在通过 Heroku 部署时失败。 以下是最常见的情况。

#### "Module not found: Error: Cannot resolve 'file' or 'directory'"

如果你得到这样的东西：

```
remote: Failed to create a production build. Reason:
remote: Module not found: Error: Cannot resolve 'file' or 'directory'
MyDirectory in /tmp/build_1234/src
```

这意味着您需要确保您“导入”的文件或目录的字母大小写与您在文件系统或 GitHub 上看到的一致。

这很重要，因为 Linux（Heroku 使用的操作系统）区分大小写。 所以 `MyDirectory` 和 `mydirectory` 是两个不同的目录，因此，即使项目在本地构建，大小写的差异也会破坏 Heroku 遥控器上的 `import` 语句。

#### "Could not find a required file."

如果您从包中排除或忽略必要的文件，您将看到与此类似的错误：

```
remote: Could not find a required file.
remote:   Name: `index.html`
remote:   Searched in: /tmp/build_a2875fc163b209225122d68916f1d4df/public
remote:
remote: npm ERR! Linux 3.13.0-105-generic
remote: npm ERR! argv "/tmp/build_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/node" "/tmp/build_a2875fc163b209225122d68916f1d4df/.heroku/node/bin/npm" "run" "build"
```

在这种情况下，请确保该文件以正确的字母大小写存在，并且不会在您的本地 `.gitignore` 或 `~/.gitignore_global` 上被忽略。

## [Netlify](https://www.netlify.com/)

**手动部署到 Netlify 的 CDN：**

```sh
npm install netlify-cli -g
netlify deploy
```

选择 `build` 作为部署路径。

**设置持续交付：**

使用此设置，当您推送到 git 或打开拉取请求时，Netlify 将构建和部署：

1.【启动一个新的 netlify 项目】(https://app.netlify.com/signup) 2. 选择您的 Git 托管服务并选择您的存储库 3. 点击“建立您的网站”

**支持客户端路由：**

要支持 `pushState`，请确保使用以下重写规则创建一个 `public/_redirects` 文件：

```
/*  /index.html  200
```

当您构建项目时，`Reactseed` 会将`public` 文件夹的内容放入构建输出中。

## [Vercel](https://vercel.com)

[Vercel](https://vercel.com/home) 是一个云平台，使开发人员能够托管 Jamstack 网站和 Web 服务，这些网站和 Web 服务可即时部署、自动扩展且无需监督，所有这些都零配置。 它们提供全球边缘网络、SSL 加密、资产压缩、缓存失效等。

### 第 1 步：将 React 项目部署到 Vercel

要使用 [Vercel for Git 集成](https://vercel.com/docs/git-integrations) 部署您的 React 项目，请确保它已被推送到 Git 存储库。

使用 [导入流程](https://vercel.com/import/git) 将项目导入 Vercel。在导入过程中，您会发现所有相关的 [选项](https://vercel.com/docs/build-step#build-&-development-settings) 都已为您预先配置，并且可以根据需要进行更改。

导入项目后，所有后续推送到分支都会生成 [Preview Deployments](https://vercel.com/docs/platform/deployments#preview)，以及对 [Production Branch](https:// /vercel.com/docs/git-integrations#production-branch）（通常是“主”或“主”）将导致[生产部署]（https://vercel.com/docs/platform/deployments#production） .

部署后，您将获得一个 URL 来查看您的应用程序，例如：https://create-react-app-example.vercel.app/。

### 步骤 2（可选）：使用自定义域

如果您想在 Vercel 部署中使用自定义域，您可以通过您的 Vercel [帐户域设置]（https://vercel.com/dashboard/domains）**添加**或**转入**您的域)

要将您的域添加到您的项目，请从 Vercel 仪表板导航到您的 [项目](https://vercel.com/docs/platform/projects)。 选择项目后，单击“设置”选项卡，然后选择 **Domains** 菜单项。 在您的项目 **Domain** 页面中，输入您希望添加到项目中的域。

添加域后，您将看到不同的配置方法。

### 部署一个新的 React 项目

您可以使用以下部署按钮部署一个新的 React 项目，并为您设置一个 Git 存储库：

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fvercel%2Fvercel%2Ftree% 2Fmaster%2Fexamples%2Fcreate-react-app)

### Vercel 参考资料：

- [Example Source](https://github.com/vercel/vercel/tree/master/examples/create-react-app)
- [Official Vercel Guide](https://vercel.com/guides/deploying-react-with-vercel-cra)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [Vercel Custom Domain Docs](https://vercel.com/docs/custom-domains)

## [Render](https://render.com)

Render 提供免费的 [静态站点](https://render.com/docs/static-sites) 托管，具有完全托管的 SSL、全球 CDN 和来自 GitHub 的持续自动部署。

按照 [`Reactseed` 部署指南](https://render.com/docs/deploy-create-react-app)，只需几分钟即可部署您的应用程序。

使用邀请码 `cra` 注册或使用 [此链接](https://render.com/i/cra)。

## [S3](https://aws.amazon.com/s3) and [CloudFront](https://aws.amazon.com/cloudfront/)

请参阅此 [博客文章](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af)，了解如何将 React 应用程序部署到 Amazon Web Services S3 和 CloudFront . 如果您希望添加自定义域、HTTPS 和持续部署，请参阅此 [博客文章](https://medium.com/dailyjs/a-guide-to-deploying-your-react-app-with-aws-s3 -包括-https-a-custom-domain-a-cdn-and-58245251f081)。

## [Surge](https://surge.sh/)

如果您还没有安装 Surge CLI，请运行 `npm install -g spray`。 运行 `surge` 命令并登录或创建一个新帐户。

当询问项目路径时，请确保指定 `build` 文件夹，例如：

```sh
       project path: /path/to/project/build
```

请注意，为了支持使用 HTML5 `pushState` API 的路由器，您可能需要在部署到 Surge 之前将构建文件夹中的 `index.html` 重命名为 `200.html`。 这 [确保每个 URL 都回退到该文件](https://surge.sh/help/adding-a-200-page-for-client-side-routing)。

## 发布组件到 npm

`Reactseed` 不提供任何内置功能来将组件发布到 npm。 如果您准备从项目中提取组件以便其他人可以使用它，我们建议将其移动到项目外部的单独目录中，然后使用 [nwb](https://github.com/insin) 之类的工具/nwb#react-components-and-libraries) 为发布做准备。
