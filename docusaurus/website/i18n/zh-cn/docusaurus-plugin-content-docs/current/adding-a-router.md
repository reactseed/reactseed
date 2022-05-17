---
id: adding-a-router
title: 添加路由
---

`Reactseed` 支持 [React Router](https://reacttraining.com/react-router/web/)，是目前最流行的路由解决方案。

## 添加页面

### 创建页面入口

- src/pages/Simple/index.tsx

```tsx
const Simple = () => <div>Simple Page</div>;

export default Simple;
```

### 配置 Router 路径

- src/routes/index.tsx

```tsx
import { lazy } from "react";
import type { IndexRouteProps, PathRouteProps } from "react-router-dom";
type RouteProps = IndexRouteProps | PathRouteProps;

const Simple = lazy(() => import("@/pages/Simple"));

const routes: RouteProps[] = [
  {
    path: "/simple",
    element: <Simple />,
  },
];

export default routes;
```

## 预览

在开发模式下运行应用程序。 打开 [http://localhost:3000/simple](http://localhost:3000/simple) 在浏览器中查看 `simple page`。
