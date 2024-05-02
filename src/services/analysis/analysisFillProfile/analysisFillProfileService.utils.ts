import {
  FillAnalysisCommonDto,
  FillBiopsyAnalysisDto,
  FillMammographyAnalysisDto,
  FillUltrasoundAnalysisDto,
} from "@/api/shared";
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

export const prepareMammographeFillPayload: PrepareAnalysisFillFunction<
  FillMammographyAnalysisDto
> = (payload) => {
  if (!payload.mammography) return null;

  return {
    analysisPayload: payload.analysisEditPayload,
    mammographyPayload: payload.mammography,
    analysisId: payload.analysisId,
  };
};

export const prepareCommonFillPayload: PrepareAnalysisFillFunction<
  FillAnalysisCommonDto
> = (payload) => {
  return {
    analysisPayload: payload.analysisEditPayload,
    analysisId: payload.analysisId,
  };
};

export const prepareBiopsyFillPayload: PrepareAnalysisFillFunction<
  FillBiopsyAnalysisDto
> = (payload) => {
  if (!payload.biopsy) return null;

  return {
    analysisPayload: payload.analysisEditPayload,
    biopsyPayload: payload.biopsy,
    analysisId: payload.analysisId,
  };
};
