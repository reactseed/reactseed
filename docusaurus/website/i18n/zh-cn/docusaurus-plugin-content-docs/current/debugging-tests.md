---
id: debugging-tests
title: 调试测试
---

有多种方法可以为您的 Jest 测试设置调试器。我们涵盖了 Chrome 和 [Visual Studio Code](https://code.visualstudio.com/) 中的调试。

## 在 Chrome 中调试测试

将以下内容添加到项目的 `package.json` 中的 `scripts` 部分

```json
"scripts": {
    "test:debug": "craco --inspect-brk test --runInBand --no-cache"
  }
```

将 `debugger;` 语句放在任何测试中并运行：

```sh
$ npm run test:debug
```

这将开始运行您的 Jest 测试，但在执行之前暂停以允许调试器附加到进程。

在 Chrome 中打开以下内容

```
about:inspect
```

打开该链接后，将显示 Chrome 开发者工具。在你的进程上选择“inspect”，一个断点将在反应脚本的第一行设置（这样做是为了让你有时间打开开发人员工具，并防止 Jest 在你有时间之前执行）。单击屏幕右上角看起来像“播放”按钮的按钮以继续执行。当 Jest 执行包含调试器语句的测试时，执行将暂停，您可以检查当前范围和调用堆栈。

> 注意：--runInBand cli 选项确保 Jest 在同一进程中运行测试，而不是为单个测试生成进程。通常，Jest 将跨进程的测试运行并行化，但很难同时调试多个进程。

## 在 Visual Studio Code 中调试测试

[Visual Studio Code](https://code.visualstudio.com) 开箱即用地支持调试 Jest 测试。

使用以下 [`launch.json`](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations) 配置文件：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug CRA Tests",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",
      "args": ["test", "--runInBand", "--no-cache", "--watchAll=false"],
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "env": { "CI": "true" },
      "disableOptimisticBPs": true
    }
  ]
}
```
