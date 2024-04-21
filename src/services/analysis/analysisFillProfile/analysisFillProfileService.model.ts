import { createEvent, sample } from "effector";
import { createGate } from "effector-react";
import { analysisProfileQuery } from "./analysisFillProfileService.api";
import { AnalysisFillPayload } from "./analysisFillProfileService.types";

const AnalysisProfileGate = createGate<{ id: number }>();

const pushFillAnalysisPayload = createEvent<AnalysisFillPayload>();
const handleSaveAnalysisButtonClicked = createEvent();

sample({
  clock: AnalysisProfileGate.open,
  fn: ({ id }) => id,
  target: analysisProfileQuery.start,
});

export const analysisFillProfileService = {
  inputs: { pushFillAnalysisPayload, handleSaveAnalysisButtonClicked },
  outputs: {},
  gates: { AnalysisProfileGate },
};
