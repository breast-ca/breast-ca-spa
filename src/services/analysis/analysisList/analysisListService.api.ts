import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { AnalysisPagedListResponseDto } from "@/api/shared";
import { AnalysisListQuery } from "./analysisListService.types";
import { filterFields } from "@/utils/filterFields";

export const analysisListQuery = createQuery<
  [AnalysisListQuery],
  AnalysisPagedListResponseDto
>({
  handler: (params): Promise<AnalysisPagedListResponseDto> =>
    axios.get("/analysis", { params: filterFields(params) }),
});
