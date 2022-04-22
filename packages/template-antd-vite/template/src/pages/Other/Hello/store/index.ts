/**
 *  store must place in out of index.tsx
 */
import { createStore } from '@reactseed/use-redux';
import type { TState } from '../models';
const initState: TState = {
  age: 20,
  name: 'reactseed',
};
export const store = createStore(() => initState);
