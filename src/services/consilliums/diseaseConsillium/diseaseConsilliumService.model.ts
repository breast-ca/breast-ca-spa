import { sample } from "effector";
import { createGate } from "effector-react";
import { consilliumQuery } from "./diseaseConsilliumService.api";

const ConsilliumGate = createGate<{ id: number }>();

sample({
  clock: ConsilliumGate.open,
  fn: ({ id }) => id,
  target: consilliumQuery.start,
});

export const diseaseConsilliumService = {
  inputs: {},
  outputs: {},
  gates: { ConsilliumGate },
};
