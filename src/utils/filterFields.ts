import { omitBy } from "lodash";

export function filterFields<T extends object>(obj: T): Partial<T> {
  return omitBy(
    obj,
    (value) => value === undefined || value === "" || value === null
  );
}
