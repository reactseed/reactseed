---
id: using-https-in-development
title: 使用 HTTPS
---

您可能需要开发服务器通过 `HTTPS` 提供页面。这可能有用的一种特殊情况是，当 API 服务器本身服务于 `HTTPS` 时，使用 [代理](proxying-api-requests-in-development) 将请求代理到 API 服务器。

为此，请将 `HTTPS` 环境变量设置为 `true`，然后像往常一样使用 `npm start` 启动开发服务器：

### Windows (cmd.exe)

```cmd
set HTTPS=true&&npm start
```

(注意: 缺少空格是故意的。)

### Windows (Powershell)

```Powershell
($env:HTTPS = "true") -and (npm start)
```

### Linux, macOS (Bash)

```sh
HTTPS=true npm start
```

请注意，服务器将使用自签名证书，因此您的网络浏览器几乎肯定会在访问页面时显示警告。

## 自定义 SSL 证书

要设置自定义证书，请将 `SSL_CRT_FILE` 和 `SSL_KEY_FILE` 环境变量设置为证书和密钥文件的路径，方法与上述 `HTTPS` 相同。请注意，您还需要设置 `HTTPS=true`。

### Linux, macOS (Bash)

```bash
HTTPS=true SSL_CRT_FILE=cert.crt SSL_KEY_FILE=cert.key npm start
```

为了避免每次都设置环境变量，您可以像这样包含在 `npm start` 脚本中：

```json
{
  "start": "HTTPS=true craco start"
}
```

或者您可以创建一个设置了 `HTTPS=true` 的 `.env` 文件。
[详细了解 Reactseed 中的环境变量](adding-custom-environment-variables)。
