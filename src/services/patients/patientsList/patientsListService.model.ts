import { combine, sample } from "effector";
import { createGate } from "effector-react";
import { parientsQuery } from "./patientsListService.api";
import { createStoreUnit } from "@/lib/effector";
import { checkIsPositive } from "@/lib/effector/utils";

const PatientsGate = createGate();

const [$pageNumber, setPageNumber] = createStoreUnit(1, {
  setState: (prev, page) => {
    if (!checkIsPositive(page)) return prev;

    return page;
  },
});
const [$pageSize, setPageSize] = createStoreUnit(3);

const $queryParams = combine(
  $pageNumber,
  $pageSize,
  (pageNumber, pageSize) => ({
    pageNumber,
    pageSize,
  })
);

sample({
  source: $queryParams,
  clock: PatientsGate.open,
  target: parientsQuery.start,
});

sample({
  clock: $queryParams,
  target: parientsQuery.start,
});

export const patientsListService = {
  inputs: {
    setPageNumber,
    setPageSize,
  },
  outputs: {
    $pageNumber,
    $pageSize,
  },
  gates: { PatientsGate },
};
