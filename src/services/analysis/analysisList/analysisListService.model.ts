import { sample } from "effector";
import { createGate } from "effector-react";
import { analysisListQuery } from "./analysisListService.api";

const AnalysisListGate = createGate();

sample({
  clock: AnalysisListGate.open,
  target: analysisListQuery.start,
});

export const analysisListService = {
  inputs: {},
  outputs: {},
  gates: { AnalysisListGate },
};
