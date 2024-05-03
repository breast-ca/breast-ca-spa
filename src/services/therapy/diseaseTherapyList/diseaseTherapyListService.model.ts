import { sample } from "effector";
import { createGate } from "effector-react";
import { diseaseTherapyListQuery } from "./diseaseTherapyListService.api";

const TherapiesGate = createGate<{ id: number }>();

sample({
  clock: TherapiesGate.open,
  fn: ({ id }) => id,
  target: diseaseTherapyListQuery.start,
});

export const diseaseTherapyListService = {
  inputs: {},
  outputs: {},
  gates: { TherapiesGate },
};
