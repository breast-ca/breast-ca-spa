import { createEvent, sample } from "effector";
import { createGate } from "effector-react";
import { diseaseAnalysisQuery } from "./diseaseAnalysisListService.api";
import { createAnalysisMutation } from "@/services/analysis/createAnalysis/createAnalysisService.api";

const DiseaseAnalysisGate = createGate<{ diseaseId: number }>();
const refresh = createEvent();

sample({
  clock: [DiseaseAnalysisGate.open, refresh],
  source: DiseaseAnalysisGate.state,
  fn: ({ diseaseId }) => diseaseId,
  target: diseaseAnalysisQuery.start,
});

sample({
  clock: createAnalysisMutation.finished.success,
  source: DiseaseAnalysisGate.status,
  target: refresh,
});

export const diseaseAnalysisListService = {
  inputs: {},
  outputs: {},
  gates: { DiseaseAnalysisGate },
};
