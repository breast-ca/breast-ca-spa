import { Store, combine, sample } from "effector";
import { createGate } from "effector-react";
import { parientsQuery } from "./patientsListService.api";
import { createStoreUnit } from "@/lib/effector";
import { checkIsPositive } from "@/lib/effector/utils";
import {
  PatientsListQuery,
  PatientsListSearchForm,
} from "./patientsListService.types";

const PatientsGate = createGate();

const [$pageNumber, setPageNumber, resetPageNumber] = createStoreUnit(1, {
  setState: (prev, page) => {
    if (!checkIsPositive(page)) return prev;

    return page;
  },
});
const [$pageSize, setPageSize] = createStoreUnit(3);

const [$searchForm, setSearchForm] = createStoreUnit<PatientsListSearchForm>({
  firstName: "",
  lastName: "",
  middleName: "",
  individualInsurance: "",
  status: null,
});

sample({
  clock: setSearchForm,
  target: resetPageNumber,
});

const $queryParams: Store<PatientsListQuery> = combine(
  $pageNumber,
  $pageSize,
  $searchForm,
  (pageNumber, pageSize, serachForm) => ({
    pageNumber,
    pageSize,
    ...serachForm,
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
    setSearchForm,
  },
  outputs: {
    $pageNumber,
    $pageSize,
    $searchForm,
  },
  gates: { PatientsGate },
};
