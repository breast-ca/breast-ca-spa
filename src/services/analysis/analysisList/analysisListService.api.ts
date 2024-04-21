import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { AnalysisPagedListResponseDto } from "@/api/shared";
import { AnalysisListQuery } from "./analysisListService.types";

export const analysisListQuery = createQuery<
  [AnalysisListQuery],
  AnalysisPagedListResponseDto
>({
  handler: (params) => axios.get("/analysis", { params }),
});
