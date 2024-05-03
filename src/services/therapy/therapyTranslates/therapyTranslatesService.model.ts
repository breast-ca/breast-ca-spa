import { sample } from "effector";
import { createGate } from "effector-react";
import { therapyTranslatesQuery } from "./therapyTranslatesService.api";

const TherapyTranslatesGate = createGate();

sample({
  clock: TherapyTranslatesGate.open,
  target: therapyTranslatesQuery.start,
});

export const therapyTranslatesService = {
  inputs: {},
  outputs: {},
  gates: { TherapyTranslatesGate },
};
