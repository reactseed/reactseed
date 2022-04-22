/**
 * React 18 FC is missing children
 * Learn more: https://github.com/facebook/react/issues/24304
 */
import type { FunctionComponent } from 'react';

declare module 'react' {
  declare namespace React {
    type FC<P = {}> = FunctionComponent<PropsWithChildren<P>>;
  }

  export = React;
  export as namespace React;
}
