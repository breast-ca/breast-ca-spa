import { createMutation, createQuery } from "@farfetched/core";
import { axios } from "@/api";
import {
  AnalysisFullResponseDto,
  FillAnalysisCommonDto,
  FillMammographyAnalysisDto,
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
  >(
    ({ analysisId, ...payload }): Promise<void> =>
      axios.patch(`/analysis/fill/${analysisId}/ultrasound`, payload)
  ),
});

export const fillMammographeAnalysisMutation = createMutation({
  effect: createEffect<
    WithAnalysisId<FillMammographyAnalysisDto>,
    void,
    EffectorAxiosError
  >(
    ({ analysisId, ...payload }): Promise<void> =>
      axios.patch(`/analysis/fill/${analysisId}/mammography`, payload)
  ),
});

export const fillCommonAnalysisMutation = createMutation({
  effect: createEffect<
    WithAnalysisId<FillAnalysisCommonDto>,
    void,
    EffectorAxiosError
  >(
    ({ analysisId, ...payload }): Promise<void> =>
      axios.patch(`/analysis/fill/${analysisId}/simple`, payload)
  ),
});
