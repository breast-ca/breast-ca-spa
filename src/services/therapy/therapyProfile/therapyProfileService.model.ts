import { createEvent, sample } from "effector";
import { createGate } from "effector-react";
import { therapyQuery } from "./therapyProfileService.api";

const TherapyGate = createGate<{ id: number }>();

const refetch = createEvent();

sample({
  clock: [refetch, TherapyGate.open],
  source: TherapyGate.state,
  fn: ({ id }) => id,
  target: therapyQuery.start,
});

export const therapyProfileService = {
  inputs: { refetch },
  outputs: {},
  gates: { TherapyGate },
};
