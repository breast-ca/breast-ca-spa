import { sample } from "effector";
import { createGate } from "effector-react";
import { diseaseQuery } from "./diseaseProfileService.api";

const DiseaseGate = createGate<{ id: number }>();

sample({
  clock: DiseaseGate.open,
  source: DiseaseGate.state,
  fn: ({ id }) => id,
  target: diseaseQuery.start,
});

export const diseaseProfileService = {
  inputs: {},
  outputs: {},
  gates: { DiseaseGate },
};
