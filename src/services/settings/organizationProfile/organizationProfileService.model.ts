import { sample } from "effector";
import { createGate } from "effector-react";
import {
  organizationQuery,
  usersListQuery,
} from "./organizationProfileService.api";
import { editUserMutation } from "../userProfile/editUserModal/editUserModalService.api";
import { addUserMutation } from "../userProfile/createUserModal/createUserModalService.api";

const OrganizationGate = createGate();

sample({
  clock: OrganizationGate.open,
  target: [organizationQuery.start, usersListQuery.start],
});

sample({
  clock: [editUserMutation.finished.success, addUserMutation.finished.success],
  target: usersListQuery.start,
});

export const organizationProfileService = {
  inputs: {},
  outputs: {},
  gates: { OrganizationGate },
};
