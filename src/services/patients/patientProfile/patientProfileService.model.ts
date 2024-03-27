import { sample } from "effector";
import { createGate } from "effector-react";
import { patientQuery } from "./patientProfileService.api";

const PatinetGate = createGate<{ id: number }>();

sample({
  clock: PatinetGate.open,
  fn: ({ id }) => id,
  target: patientQuery.start,
});

export const patientProfileService = {
  inputs: {},
  outputs: {},
  gates: { PatinetGate },
};
