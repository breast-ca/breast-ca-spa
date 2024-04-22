import { FillUltrasoundAnalysisDto } from "@/api/shared";
import { PrepareAnalysisFillFunction } from "./analysisFillProfileService.types";

export const prepareUltrasoundFillPayload: PrepareAnalysisFillFunction<
  FillUltrasoundAnalysisDto
> = (payload) => {
  if (!payload.ultrasound) return null;

  return {
    analysisPayload: payload.analysisEditPayload,
    ultrasoundPayload: payload.ultrasound,
    analysisId: payload.analysisId,
  };
};
