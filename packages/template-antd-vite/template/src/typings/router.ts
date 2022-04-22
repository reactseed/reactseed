import { Route as LayoutRoute } from '@ant-design/pro-layout/lib/typings';
import type { IndexRouteProps, PathRouteProps } from 'react-router-dom';

export interface Route extends LayoutRoute {
  paths?: string[];
}

export type RouteProps = IndexRouteProps | PathRouteProps;
