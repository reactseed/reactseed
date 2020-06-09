import React from 'react';
import { useRedux } from '@/hooks';
import { Button, Input } from 'antd';
import { createStore, Provider } from '@reactseed/use-redux';

interface TState {
  name: string;
  age: number;
}

interface TMethod {
  updateName: (name: string) => void;
  becomeOlder: () => void;
}

const store = createStore(() => ({
  age: 20,
  name: 'reactseed',
}));

const methods = (state: TState): TMethod => {
  const { age } = state;
  return {
    updateName: (name: string) => {
      state.name = name;
    },
    becomeOlder: () => {
      state.age = age + 1;
    },
  };
};

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
