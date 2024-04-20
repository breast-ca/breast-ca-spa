import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { AnalysisResponseDto } from "@/api/shared";

export const diseaseAnalysisQuery = createQuery<
  [number],
  AnalysisResponseDto[]
>({
  handler: (diseaseId) => axios.get(`/analysis/byDisease/${diseaseId}`),
});
