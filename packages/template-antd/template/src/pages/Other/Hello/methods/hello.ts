import { TState, TMethod } from '../models';

export const methods = (state: TState): TMethod => {
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
