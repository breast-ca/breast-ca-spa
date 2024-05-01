import { createEvent, merge, sample, split } from "effector";
import { createGate } from "effector-react";
import {
  analysisProfileQuery,
  fillCommonAnalysisMutation,
  fillMammographeAnalysisMutation,
  fillUltrasoundAnalysisMutation,
} from "./analysisFillProfileService.api";
import {
  AnalysisFillPayload,
  AnalysisFillSavePayload,
  WithAnalysisId,
} from "./analysisFillProfileService.types";
import {
  AnalysisFullResponseDto,
  AnalysisType,
  FillMammographyAnalysisDto,
  FillUltrasoundAnalysisDto,
} from "@/api/shared";
import {
  prepareCommonFillPayload,
  prepareMammographeFillPayload,
  prepareUltrasoundFillPayload,
} from "./analysisFillProfileService.utils";
import { message } from "antd";

const AnalysisProfileGate = createGate<{ id: number }>();

const handleSaveAnalysisButtonClicked = createEvent();
const handleSaveAnalysisFill = createEvent<AnalysisFillSavePayload>();

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
  fn: (analysis, payload): AnalysisFillPayload => {
    return {
      ...payload,
      analysisId: analysis!.id,
      analysisType: analysis!.analysisType,
    };
  },
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
    [AnalysisType.CommonBloodAnalysis]: pushCommonBloodAnalysisFill,
    [AnalysisType.CommonUrineAnalysis]: pushCommonUrineAnalysisFill,
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

sample({
  clock: sample({
    source: pushMammographyFill,
    fn: prepareMammographeFillPayload,
  }),
  filter: (payload): payload is WithAnalysisId<FillMammographyAnalysisDto> => {
    return Boolean(payload);
  },
  target: fillMammographeAnalysisMutation.start,
});

sample({
  clock: sample({
    source: pushCommonBloodAnalysisFill,
    fn: prepareCommonFillPayload,
  }),
  filter: (payload): payload is WithAnalysisId<FillMammographyAnalysisDto> => {
    return Boolean(payload);
  },
  target: fillCommonAnalysisMutation.start,
});

// processing for done events
merge([
  fillUltrasoundAnalysisMutation.finished.failure,
  fillMammographeAnalysisMutation.finished.failure,
  fillCommonAnalysisMutation.finished.failure,
]).watch(() => message.error("Ошибка запроса!"));

const handleFillAnalysisSuccess = merge([
  fillUltrasoundAnalysisMutation.finished.success,
  fillMammographeAnalysisMutation.finished.success,
  fillCommonAnalysisMutation.finished.success,
]);

handleFillAnalysisSuccess.watch(() => message.success("Анализ сохранен!"));

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
