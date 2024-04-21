import { sample } from "effector";
import { createGate } from "effector-react";
import { AnalysisTranslatesQuery } from "./analysisService.api";

const AnalysisTranslatesGate = createGate();

sample({
  source: AnalysisTranslatesQuery.$data,
  clock: AnalysisTranslatesGate.open,
  filter: (data) => !data,
  target: AnalysisTranslatesQuery.start,
});

export const analysisService = {
  inputs: {},
  outputs: {
    $translates: AnalysisTranslatesQuery.$data,
  },
  gates: { AnalysisTranslatesGate },
};
