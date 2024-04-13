import { sample } from "effector";
import { createGate } from "effector-react";
import { analisisTranslatesQuery } from "./analisisService.api";

const AnalisisTranslatesGate = createGate();

sample({
  source: analisisTranslatesQuery.$data,
  clock: AnalisisTranslatesGate.open,
  filter: (data) => !data,
  target: analisisTranslatesQuery.start,
});

export const analisisService = {
  inputs: {},
  outputs: {
    $translates: analisisTranslatesQuery.$data,
  },
  gates: { AnalisisTranslatesGate },
};
