import { sample } from "effector";
import { createGate } from "effector-react";
import {
  organizationQuery,
  usersListQuery,
} from "./organizationProfileService.api";

const OrganizationGate = createGate();

sample({
  clock: OrganizationGate.open,
  target: [organizationQuery.start, usersListQuery.start],
});

export const organizationProfileService = {
  inputs: {},
  outputs: {},
  gates: { OrganizationGate },
};
