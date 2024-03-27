import { sample } from "effector";
import { createGate } from "effector-react";
import { organizationQuery } from "./organizationProfileService.api";

const OrganizationGate = createGate();

sample({
  clock: OrganizationGate.open,
  target: organizationQuery.start,
});

export const organizationProfileService = {
  inputs: {},
  outputs: {},
  gates: { OrganizationGate },
};
