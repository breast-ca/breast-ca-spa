import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { AnalysisResponseDto } from "@/api/shared";

export const analysisListQuery = createQuery<[], AnalysisResponseDto[]>({
  handler: () => axios.get("/analysis"),
});
