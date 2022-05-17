---
id: adding-a-css-modules-stylesheet
title: 添加 CSS Modules
---

该项目支持 [CSS 模块](https://github.com/css-modules/css-modules) 以及使用 `[name].module.css` 文件命名约定的常规样式表。 CSS 模块允许通过自动创建格式为 `[filename]\_[classname]\_\_[hash]` 的唯一类名来确定 CSS 的范围。

CSS 模块让您在不同的文件中使用相同的 CSS 类名，而不必担心命名冲突。 在 [此处](https://css-tricks.com/css-modules-part-1-need/) 了解有关 CSS 模块的更多信息。

## `Button.module.css`

```css
.error {
  background-color: red;
}
```

## `another-stylesheet.css`

```css
.error {
  color: red;
}
```

## `Button.tsx`

```tsx
import React, { Component } from "react";
import styles from "./Button.module.css"; // 导入 CSS Modules
import "./another-stylesheet.css"; // 导入常规 CSS

class Button extends Component {
  render() {
    // 作为 js 对象引用
    return <button className={styles.error}>Error Button</button>;
  }
}
```

## 结果

不要与其他 `.error` 类名冲突

```html
<!-- 这个按钮有红色背景但没有红色文字 -->
<button class="Button_error_ax7yz">Error Button</button>
```

**这是一项可选功能。** 完全支持常规的 `<link>` 样式表和 CSS 文件。 对于以 `.module.css` 扩展名结尾的文件，打开 CSS 模块。
