import { sample } from "effector";
import { createGate } from "effector-react";
import { consilliumQuery } from "./diseaseConsilliumService.api";
import { distributeConsilliumMutation } from "./distributeConsillium/distributeConsilliumService.api";

const ConsilliumGate = createGate<{ id: number }>();

sample({
  clock: [ConsilliumGate.open, distributeConsilliumMutation.finished.success],
  source: ConsilliumGate.state,
  filter: ({ id }) => Boolean(id),
  fn: ({ id }) => id,
  target: consilliumQuery.start,
});

sample({
  clock: ConsilliumGate.close,
  target: consilliumQuery.reset,
});

export const diseaseConsilliumService = {
  inputs: {},
  outputs: {},
  gates: { ConsilliumGate },
};
