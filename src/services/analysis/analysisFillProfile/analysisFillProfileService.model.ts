import { sample } from "effector";
import { createGate } from "effector-react";
import { analysisProfileQuery } from "./analysisFillProfileService.api";

const AnalysisProfileGate = createGate<{ id: number }>();

sample({
  clock: AnalysisProfileGate.open,
  fn: ({ id }) => id,
  target: analysisProfileQuery.start,
});

export const analysisFillProfileService = {
  inputs: {},
  outputs: {},
  gates: { AnalysisProfileGate },
};
