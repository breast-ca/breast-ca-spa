import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { AnalysisTranslatesDto } from "@/api/shared";

export const AnalysisTranslatesQuery = createQuery({
  handler: (): Promise<AnalysisTranslatesDto> =>
    axios.get("/analysis/translates"),
});
