import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { AnalysisPayloadResponseDto } from "@/api/shared";

export const diseaseAnalysisQuery = createQuery<
  [number],
  AnalysisPayloadResponseDto[]
>({
  handler: (diseaseId) => axios.get(`/analysis/byDisease/${diseaseId}`),
});
