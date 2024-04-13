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
  source: parientsQuery.$data,
  clock: setSearchForm,
  filter: (data) => Boolean(data),
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
  source: combine($queryParams, parientsQuery.$data, (params, data) => ({
    params,
    data,
  })),
  clock: PatientsGate.open,
  filter: ({ data }) => !data,
  fn: ({ params }) => params,
  target: parientsQuery.start,
});

sample({
  clock: $queryParams,
  target: parientsQuery.start,
});

sample({
  clock: PatientsGate.close,
  target: parientsQuery.reset,
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
