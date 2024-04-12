import { createEvent, createStore } from "effector";
import { StoreUnit, StoreUnitConfig } from "./types";

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
