import { RouteProps as ReactRouteProps } from 'react-router-dom';
import { Route as LayoutRoute } from '@ant-design/pro-layout/lib/typings';

export interface Route extends LayoutRoute {
  paths?: string[];
}

export type OmitRouteProps = Omit<ReactRouteProps, 'component'> & {
  component: () => Promise<{ default: any }>;
};

export interface RouteProps extends OmitRouteProps {
  component: () => Promise<{ default: any }>;
}
