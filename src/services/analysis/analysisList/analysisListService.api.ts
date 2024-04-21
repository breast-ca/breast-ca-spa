import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { AnalysisListResponseDto } from "@/api/shared";

export const analysisListQuery = createQuery<[], AnalysisListResponseDto[]>({
  handler: () => axios.get("/analysis"),
});
