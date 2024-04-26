import { sample } from "effector";
import { createGate } from "effector-react";
import { diseaseConsilliumsListQuery } from "./diseaseConsilliumsListService.api";

const DiseaseConsilliumsGate = createGate<{ diseaseId: number }>();

sample({
  clock: DiseaseConsilliumsGate.open,
  fn: ({ diseaseId }) => diseaseId,
  target: diseaseConsilliumsListQuery.start,
});

export const diseaseConsilliumsListService = {
  inputs: {},
  outputs: {},
  gates: { DiseaseConsilliumsGate },
};
