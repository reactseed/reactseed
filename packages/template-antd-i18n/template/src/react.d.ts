/**
 * React 18 FC is missing children
 * Learn more: https://github.com/facebook/react/issues/24304
 */
import type {
  FunctionComponent,
  PropsWithChildren,
  ComponentType,
} from 'react';
import type { TransProps } from '@lingui/macro';
import type { I18nProviderProps } from '@lingui/react';

declare module 'react' {
  declare namespace React {
    type FC<P = {}> = FunctionComponent<PropsWithChildren<P>>;
  }

  export = React;
  export as namespace React;
}

declare module '@lingui/macro' {
  declare namespace LinguiMacro {
    declare const Trans: ComponentType<PropsWithChildren<TransProps>>;
  }

  export = LinguiMacro;
  export as namespace LinguiMacro;
}

declare module '@lingui/react' {
  declare namespace LinguiReact {
    declare const I18nProvider: FunctionComponent<
      PropsWithChildren<I18nProviderProps>
    >;
  }

  export = LinguiReact;
  export as namespace LinguiReact;
}
