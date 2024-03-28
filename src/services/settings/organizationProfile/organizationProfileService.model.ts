import { createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";
import {
  editOrganizationMutation,
  organizationQuery,
  usersListQuery,
} from "./organizationProfileService.api";
import { editUserMutation } from "../userProfile/editUserModal/editUserModalService.api";
import { addUserMutation } from "../userProfile/createUserModal/createUserModalService.api";
import { message } from "antd";
import { getAxiosError } from "@/utils/getAxiosError";

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

sample({
  clock: editOrganizationMutation.finished.success,
  target: [organizationQuery.start, closeEditModal],
});

editOrganizationMutation.finished.success.watch(() => {
  message.success("Данные сохранены!");
});

editOrganizationMutation.finished.failure.watch((e) => {
  message.success(getAxiosError(e.error));
});

export const organizationProfileService = {
  inputs: { openEditModal, closeEditModal },
  outputs: { $isEditModalOpen },
  gates: { OrganizationGate },
};
