import { createMutation, createQuery } from "@farfetched/core";
import { axios } from "@/api";
import {
  AnalysisFullResponseDto,
  FillUltrasoundAnalysisDto,
} from "@/api/shared";
import { createEffect } from "effector";
import { WithAnalysisId } from "./analysisFillProfileService.types";
import { EffectorAxiosError } from "@/types";

export const analysisProfileQuery = createQuery<
  [number],
  AnalysisFullResponseDto
>({
  handler: (id) => axios(`analysis/${id}`),
});

export const fillUltrasoundAnalysisMutation = createMutation({
  effect: createEffect<
    WithAnalysisId<FillUltrasoundAnalysisDto>,
    void,
    EffectorAxiosError
  >(() => axios.patch(`/api/analysis/fill/{analysisId}/ultrasound`)),
});
