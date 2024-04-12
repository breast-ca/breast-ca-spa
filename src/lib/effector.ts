import {
  EventCallable,
  StoreWritable,
  createEvent,
  createStore,
} from "effector";

type StoreUnitConfig<T> = {
  setState: (prevState: T, newState: T) => T;
};

type StoreUnit<T> = [
  store: StoreWritable<T>,
  setState: EventCallable<T>,
  reset: EventCallable<void>,
];

export function createStoreUnit<T>(
  intitialState: T,
  config?: StoreUnitConfig<T>
): StoreUnit<T> {
  const setState = createEvent<T>();
  const reset = createEvent();

  const store = createStore(intitialState)
    .on(setState, config?.setState ? config?.setState : (_, state) => state)
    .reset(reset);

  return [store, setState, reset];
}
