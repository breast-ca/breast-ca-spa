import { sample } from "effector";
import { createGate } from "effector-react";
import { parientsQuery } from "./patientsListService.api";

const PatientsGate = createGate();

sample({ clock: PatientsGate.open, target: parientsQuery.start });

export const patientsListService = {
  inputs: {},
  outputs: {},
  gates: { PatientsGate },
};
