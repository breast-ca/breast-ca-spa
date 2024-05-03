import { sample } from "effector";
import { createGate } from "effector-react";
import { therapyQuery } from "./therapyProfileService.api";

const TherapyGate = createGate<{ id: number }>();

sample({
  clock: TherapyGate.open,
  fn: ({ id }) => id,
  target: therapyQuery.start,
});

export const therapyProfileService = {
  inputs: {},
  outputs: {},
  gates: { TherapyGate },
};
