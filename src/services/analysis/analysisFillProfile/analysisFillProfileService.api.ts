import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { AnalysisFullResponseDto } from "@/api/shared";

export const analysisProfileQuery = createQuery<[number], AnalysisFullResponseDto>({
  handler: (id) => axios(`analysis/${id}`),
});
