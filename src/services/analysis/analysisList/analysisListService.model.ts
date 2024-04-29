import { Store, combine, sample } from "effector";
import { createGate } from "effector-react";
import { createStoreUnit } from "@/lib/effector";
import {
  AnalysisListQuery,
  AnalysisListSearchForm,
} from "./analysisListService.types";
import { analysisListQuery } from "./analysisListService.api";
import { checkIsPositive } from "@/lib/effector/utils";

const AnalysisListGate = createGate();

const [$pageNumber, setPageNumber, resetPageNumber] = createStoreUnit(1, {
  setState: (prev, page) => {
    if (!checkIsPositive(page)) return prev;

    return page;
  },
});
const [$pageSize, setPageSize] = createStoreUnit(10);

const [$searchForm, setSearchForm] = createStoreUnit<AnalysisListSearchForm>({
  firstName: "",
  lastName: "",
  middleName: "",
  status: null,
});

sample({
  source: analysisListQuery.$data,
  clock: setSearchForm,
  filter: (data) => Boolean(data),
  target: resetPageNumber,
});

const $queryParams: Store<AnalysisListQuery> = combine(
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
  source: combine($queryParams, analysisListQuery.$data, (params, data) => ({
    params,
    data,
  })),
  clock: AnalysisListGate.open,
  filter: ({ data }) => !data,
  fn: ({ params }) => params,
  target: analysisListQuery.start,
});

sample({
  clock: $queryParams,
  target: analysisListQuery.start,
});

sample({
  clock: AnalysisListGate.close,
  target: analysisListQuery.reset,
});

export const analysisListService = {
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
  gates: { AnalysisListGate },
};
