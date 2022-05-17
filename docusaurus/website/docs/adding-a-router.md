---
id: adding-a-router
title: Adding a Router
---

`Reactseed` supports [React Router](https://reacttraining.com/react-router/web/), It is the most popular routing solution.

## Adding a page

### Create a page entry

- src/pages/Simple/index.tsx

```tsx
const Simple = () => <div>Simple Page</div>;

export default Simple;
```

### Configure router path

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

## Preview

Runs the app in development mode. Open [http://localhost:3000/simple](http://localhost:3000/simple) to view `simple page` in the browser.
