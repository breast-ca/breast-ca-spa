import { EventCallable, StoreWritable } from "effector";

export type StoreUnitConfig<T> = {
  setState: (prevState: T, newState: T) => T;
};

export type StoreUnit<T> = [
  store: StoreWritable<T>,
  setState: EventCallable<T>,
  reset: EventCallable<void>,
];
