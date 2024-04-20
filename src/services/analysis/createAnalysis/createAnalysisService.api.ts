import { createMutation } from "@farfetched/core";
import { axios } from "@/api";
import { createEffect } from "effector";
import { CreateAnalisisRequestPayload } from "./createAnalysisService.types";
import { EffectorAxiosError } from "@/types";

export const createAnalysisMutation = createMutation({
  effect: createEffect<CreateAnalisisRequestPayload, void, EffectorAxiosError>(
    ({ diseaseId, ...data }): Promise<void> =>
      axios.post(`/analysis/${diseaseId}`, data)
  ),
});
