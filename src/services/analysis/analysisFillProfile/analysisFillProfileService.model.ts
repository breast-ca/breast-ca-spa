import { createEvent, merge, sample, split } from "effector";
import { createGate } from "effector-react";
import {
  analysisProfileQuery,
  fillUltrasoundAnalysisMutation,
} from "./analysisFillProfileService.api";
import {
  AnalysisFillPayload,
  WithAnalysisId,
} from "./analysisFillProfileService.types";
import {
  AnalysisFullResponseDto,
  AnalysisType,
  FillUltrasoundAnalysisDto,
} from "@/api/shared";
import { prepareUltrasoundFillPayload } from "./analysisFillProfileService.utils";
import { message } from "antd";

const AnalysisProfileGate = createGate<{ id: number }>();

const handleSaveAnalysisButtonClicked = createEvent();
const handleSaveAnalysisFill =
  createEvent<Omit<AnalysisFillPayload, "analysisType" | "analysisId">>();

const pushFillAnalysisPayload = createEvent<AnalysisFillPayload>();

const pushUltrasoundFill = createEvent<AnalysisFillPayload>();
const pushBoneScanFill = createEvent<AnalysisFillPayload>();
const pushBiopsyFill = createEvent<AnalysisFillPayload>();
const pushBloodBiochemistryFill = createEvent<AnalysisFillPayload>();
const pushCommonUrineAnalysisFill = createEvent<AnalysisFillPayload>();
const pushCommonBloodAnalysisFill = createEvent<AnalysisFillPayload>();
const pushComputerTomographyFill = createEvent<AnalysisFillPayload>();
const pushMRIFill = createEvent<AnalysisFillPayload>();
const pushMammographyFill = createEvent<AnalysisFillPayload>();
const pushMarkersFill = createEvent<AnalysisFillPayload>();
const pushPETCTFill = createEvent<AnalysisFillPayload>();
const pushXRayFill = createEvent<AnalysisFillPayload>();

sample({
  clock: handleSaveAnalysisFill,
  source: analysisProfileQuery.$data,
  filter: (analysis): analysis is AnalysisFullResponseDto => Boolean(analysis),
  fn: (analysis, payload): AnalysisFillPayload => ({
    ...payload,
    analysisId: analysis!.id,
    analysisType: analysis!.analysisType,
  }),
  target: pushFillAnalysisPayload,
});

split({
  source: pushFillAnalysisPayload,
  match: (data: AnalysisFillPayload): AnalysisType => data.analysisType,
  cases: {
    [AnalysisType.Ultrasound]: pushUltrasoundFill,
    [AnalysisType.BoneScan]: pushBoneScanFill,
    [AnalysisType.Biopsy]: pushBiopsyFill,
    [AnalysisType.BloodBiochemistry]: pushBloodBiochemistryFill,
    [AnalysisType.CommonBloodAnalysis]: pushCommonUrineAnalysisFill,
    [AnalysisType.CommonUrineAnalysis]: pushCommonBloodAnalysisFill,
    [AnalysisType.ComputerTomography]: pushComputerTomographyFill,
    [AnalysisType.MRI]: pushMRIFill,
    [AnalysisType.Mammography]: pushMammographyFill,
    [AnalysisType.Markers]: pushMarkersFill,
    [AnalysisType.PETCT]: pushPETCTFill,
    [AnalysisType.XRay]: pushXRayFill,
  },
});

// processing for analysis fill splitted events
sample({
  clock: sample({
    source: pushUltrasoundFill,
    fn: prepareUltrasoundFillPayload,
  }),
  filter: (payload): payload is WithAnalysisId<FillUltrasoundAnalysisDto> => {
    return Boolean(payload);
  },
  target: fillUltrasoundAnalysisMutation.start,
});

// processing for done events
merge([fillUltrasoundAnalysisMutation.finished.failure]).watch(() =>
  message.error("Ошибка запроса!")
);

const handleFillAnalysisSuccess = merge([
  fillUltrasoundAnalysisMutation.finished.success,
]);

handleFillAnalysisSuccess.watch(() =>
  message.success("Анализ сохранен!")
);

// loading for analysis profile
sample({
  clock: [AnalysisProfileGate.open, handleFillAnalysisSuccess],
  source: AnalysisProfileGate.state,
  fn: ({ id }) => id,
  target: analysisProfileQuery.start,
});

export const analysisFillProfileService = {
  inputs: {
    pushFillAnalysisPayload,
    handleSaveAnalysisButtonClicked,
    handleSaveAnalysisFill,
  },
  outputs: {},
  gates: { AnalysisProfileGate },
};
