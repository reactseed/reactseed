/**
 *  store must place in outof index.tsx
 */
import { createStore } from '@reactseed/use-redux';
import { TState } from '../models';
const initState: TState = {
  age: 20,
  name: 'reactseed',
};
export const store = createStore(() => initState);
