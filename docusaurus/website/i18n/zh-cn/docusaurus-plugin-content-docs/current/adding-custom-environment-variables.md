---
id: adding-custom-environment-variables
title: 环境变量
---

您的项目可以使用在您的环境中声明的变量，就好像它们是在您的 JS 文件中本地声明的一样。默认情况下，您将为您定义`NODE_ENV`，以及任何其他以`REACT_APP_`开头的环境变量。

> 警告：不要在您的 React 应用程序中存储任何秘密（例如私有 API 密钥）！
>
> 环境变量嵌入到构建中，这意味着任何人都可以通过检查您的应用程序文件来查看它们。

**环境变量在构建时嵌入**。由于`Reactseed` 生成一个静态 HTML/CSS/JS 包，它不可能在运行时读取它们。要在运行时读取它们，您需要将 HTML 加载到服务器上的内存中并在运行时替换占位符。或者，您可以随时更改服务器上的应用程序来重建它们。

> 注意：您必须创建以 `REACT_APP_` 开头的自定义环境变量。除了 `NODE_ENV` 之外的任何其他变量都将被忽略，以避免意外[在可能具有相同名称的机器上暴露私钥](https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527)。更改任何环境变量都需要您重新启动正在运行的开发服务器。

这些环境变量将在 `process.env` 上为您定义。例如，有一个名为 `REACT_APP_NOT_SECRET_CODE` 的环境变量将在您的 JS 中公开为 `process.env.REACT_APP_NOT_SECRET_CODE`。

还有一个名为 `NODE_ENV` 的内置环境变量。您可以从 `process.env.NODE_ENV` 中读取它。运行 `npm start` 时总是等于 `development`，运行 `npm test` 时总是等于 `test`，运行 `npm run build` 它总是等于`'production'`。 **您不能手动覆盖 `NODE_ENV`。** 这可以防止开发人员意外将缓慢的开发版本部署到生产环境。

这些环境变量可用于根据项目的部署位置或使用版本控制之外的敏感数据有条件地显示信息。

首先，您需要定义环境变量。例如，假设您想在 `<form>` 中使用环境变量：

```jsx
render() {
  return (
    <div>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
      </form>
    </div>
  );
}
```

在构建期间，`process.env.REACT_APP_NOT_SECRET_CODE` 将被替换为 `REACT_APP_NOT_SECRET_CODE` 环境变量的当前值。 请记住，`NODE_ENV` 变量将自动为您设置。

当您在浏览器中加载应用程序并检查 `<input>` 时，您会看到它的值设置为 `abcdef`，并且粗体文本将显示使用 `npm start` 时提供的环境：

<!-- prettier-ignore-start -->

```html
<div>
  <small>You are running this application in <b>development</b> mode.</small>
  <form>
    <input type="hidden" value="abcdef" />
  </form>
</div>
```

<!-- prettier-ignore-end -->

上面的表单正在从环境中寻找一个名为 `REACT_APP_NOT_SECRET_CODE` 的变量。 为了使用这个值，我们需要在环境中定义它。 这可以通过两种方式完成：在您的 shell 中或在 `.env` 文件中。 这两种方式都将在接下来的几节中介绍。

访问 `NODE_ENV` 对于有条件地执行操作也很有用：

```js
if (process.env.NODE_ENV !== "production") {
  analytics.disable();
}
```

当您使用 `npm run build` 编译应用程序时，缩小步骤将去除此条件，并且生成的包会更小。

## 在 HTML 中引用环境变量

您还可以访问 `public/index.html` 中以 `REACT_APP_` 开头的环境变量。 例如：

```html
<title>%REACT_APP_WEBSITE_NAME%</title>
```

请注意，上述部分的注意事项适用：

- 除了一些内置变量（`NODE_ENV` 和 `PUBLIC_URL`），变量名必须以 `REACT_APP_` 开头才能工作。
- 环境变量在构建时注入。

## 在 Shell 中添加临时环境变量

定义环境变量可能因操作系统而异。 同样重要的是要知道这种方式在 shell 会话的生命周期内是暂时的。

### Windows (cmd.exe)

```cmd
set "REACT_APP_NOT_SECRET_CODE=abcdef" && npm start
```

（注意：需要在变量赋值两边加上引号以避免尾随空格。）

### Windows (Powershell)

```Powershell
($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start)
```

### Linux, macOS (Bash)

```sh
REACT_APP_NOT_SECRET_CODE=abcdef npm start
```

## 在 `.env` 中添加开发环境变量

要定义永久环境变量，请在项目的根目录中创建一个名为 `.env` 的文件：

```
REACT_APP_NOT_SECRET_CODE=abcdef
```

> 注意：您必须创建以 `REACT_APP_` 开头的自定义环境变量。 除了 `NODE_ENV` 之外的任何其他变量都将被忽略，以避免[意外暴露可能具有相同名称的机器上的私钥](https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527)。 更改任何环境变量都需要您重新启动正在运行的开发服务器。

> 注意：更改 `.env` 文件后需要重启开发服务器。

`.env` 文件**应该被**检查到源代码管理中（排除 `.env*.local`）。

### 还有哪些 `.env` 文件可以使用？

- `.env`：默认值。
- `.env.local`：本地覆盖。 **此文件为除测试以外的所有环境加载。**
- `.env.development`、`.env.test`、`.env.production`：特定于环境的设置。
- `.env.development.local`、`.env.test.local`、`.env.production.local`：环境特定设置的本地覆盖。

左侧文件的优先级高于右侧文件：

- `npm start`: `.env.development.local`, `.env.local`, `.env.development`, `.env`
- `npm run build`: `.env.production.local`, `.env.local`, `.env.production`, `.env`
- `npm test`: `.env.test.local`, `.env.test`, `.env`（注意 `.env.local` 缺失）

如果机器没有明确设置这些变量，它们将作为默认值。

请参阅 [dotenv 文档](https://github.com/motdotla/dotenv) 了解更多详情。

> 注意：如果您为开发定义环境变量，您的 CI 和/或托管平台很可能需要
> 这些也已定义。 查阅他们的文档如何做到这一点。 例如，请参阅 [Travis CI](https://docs.travis-ci.com/user/environment-variables/) 或 [Heroku](https://devcenter.heroku.com/articles/config-) 的文档变量）。

### 在 `.env` 中扩展环境变量

扩展您机器上已有的变量以在您的 `.env` 文件中使用（使用 [dotenv-expand](https://github.com/motdotla/dotenv-expand)）。

例如，要获取环境变量 `npm_package_version`：

```
REACT_APP_VERSION=$npm_package_version
# also works:
# REACT_APP_VERSION=${npm_package_version}
```

或者扩展当前 `.env` 文件的本地变量：

```
DOMAIN=www.example.com
REACT_APP_FOO=$DOMAIN/foo
REACT_APP_BAR=$DOMAIN/bar
```
