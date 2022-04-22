import React from 'react';
import { useRedux } from '@/hooks';
import { Button, Input } from 'antd';
import { Provider } from '@reactseed/use-redux';
import { methods } from './methods';
import { store } from './store';
import { TState, TMethod } from './models';
const Hello: React.FC = () => {
  const [state, method] = useRedux<TState, TMethod>(methods);
  return (
    <>
      <p style={{ marginBottom: 16 }}>
        This is an example using <b>useRedux</b>，See the section about&nbsp;
        <a href="https://github.com/reactseed/use-redux">
          @reactseed/use-redux
        </a>
        &nbsp; for more information.
      </p>

      <h1>
        Hello {state.name} ({state.age})
      </h1>

      <Input
        style={{ width: 240, marginRight: 16 }}
        onChange={e => {
          method.updateName(e.target.value);
        }}
        value={state.name}
      />
      <Button onClick={method.becomeOlder}>Older</Button>
    </>
  );
};

const HelloPage: React.FC = () => {
  return (
    <Provider store={store}>
      <Hello />
    </Provider>
  );
};

export default HelloPage;
