import { sample } from "effector";
import { createGate } from "effector-react";
import { diseaseAnalysisQuery } from "./diseaseAnalysisListService.api";

const DiseaseAnalysisGate = createGate<{ diseaseId: number }>();

sample({
  clock: DiseaseAnalysisGate.open,
  fn: ({ diseaseId }) => diseaseId,
  target: diseaseAnalysisQuery.start,
});

export const diseaseAnalysisListService = {
  inputs: {},
  outputs: {},
  gates: { DiseaseAnalysisGate },
};
