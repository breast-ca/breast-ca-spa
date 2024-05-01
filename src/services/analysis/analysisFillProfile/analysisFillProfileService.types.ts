import {
  AnalysisType,
  CreateMammographyDto,
  CreateUltrasoundDto,
  EditAnalysisDto,
  FillUltrasoundAnalysisDto,
} from "@/api/shared";

export interface AnalysisFillPayload {
  analysisType: AnalysisType;
  analysisId: number;
  analysisEditPayload: EditAnalysisDto;
  ultrasound?: CreateUltrasoundDto | null;
  mammography?: CreateMammographyDto | null;
}

export type AnalysisFillCommonFormData = FillUltrasoundAnalysisDto;

export type WithAnalysisId<T extends object> = {
  analysisId: number;
} & T;

export type PrepareAnalysisFillFunction<T extends object> = (
  payload: AnalysisFillPayload
) => WithAnalysisId<T> | null;

export type AnalysisFillSavePayload = Omit<
  AnalysisFillPayload,
  "analysisType" | "analysisId"
>;
