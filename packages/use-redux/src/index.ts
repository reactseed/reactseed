import { useMemo, useCallback } from 'react';
import {
  useSelector as useOriginSelector,
  shallowEqual,
  useDispatch,
  useStore,
} from 'react-redux';
import produce from 'immer';

/**
 * useSelector
 * @param {*} selector
 */
const useSelector = <TState, TSelected>(selector) => {
  return useOriginSelector<TState, TSelected>(selector, shallowEqual);
};

/**
 * Take state as a parameter, return method and state
 */
export interface Transitions<T, M> {
  (state: T): M;
}

/**
 * useRedux
 * @see {@link https://github.com/immerjs/use-immer/issues/10}
 * @param transitions: Transitions<T, M>
 */
const useRedux = <T, M>(transitions: Transitions<T, M>) => {
  const store = useStore();
  const dispatch = useDispatch();
  const state: T = useSelector((state: T) => state);
  const methods: M = transitions(state);
  const actionTypes = Object.keys(methods);

  const reducer = useCallback(
    (state, action) => {
      if (transitions(state)[action.type]) {
        transitions(state)[action.type](action.payload);
      }
      return state;
    },
    [transitions]
  );

  const callbacks = useMemo(
    () =>
      actionTypes.reduce((actions, type) => {
        actions[type] = (payload) => dispatch({ type, payload });
        return actions;
      }, {}),
    [actionTypes, dispatch]
  );

  store.replaceReducer(produce(reducer));
  return [state, callbacks] as [T, M];
};

export default useRedux;

export * from 'react-redux';

export * from 'redux';

export * from 'immer';
