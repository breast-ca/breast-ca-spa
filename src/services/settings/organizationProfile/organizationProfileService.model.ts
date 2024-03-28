import { createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";
import {
  organizationQuery,
  usersListQuery,
} from "./organizationProfileService.api";
import { editUserMutation } from "../userProfile/editUserModal/editUserModalService.api";
import { addUserMutation } from "../userProfile/createUserModal/createUserModalService.api";

const OrganizationGate = createGate();

const openEditModal = createEvent();
const closeEditModal = createEvent();

const $isEditModalOpen = createStore(false)
  .on(openEditModal, () => true)
  .on(closeEditModal, () => false);

sample({
  clock: OrganizationGate.open,
  target: [organizationQuery.start, usersListQuery.start],
});

sample({
  clock: [editUserMutation.finished.success, addUserMutation.finished.success],
  target: usersListQuery.start,
});

export const organizationProfileService = {
  inputs: { openEditModal, closeEditModal },
  outputs: { $isEditModalOpen },
  gates: { OrganizationGate },
};
