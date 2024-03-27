import { sample } from "effector";
import { createGate } from "effector-react";
import { rolesTranslatesQuery, userQuery } from "./userService.api";
import { editUserMutation } from "../settings/userProfile/editUserModal/editUserModalService.api";

const UserGate = createGate();

sample({
  clock: [UserGate.open, editUserMutation.finished.success],
  target: [userQuery.start, rolesTranslatesQuery.start],
});

export const userService = {
  inputs: {},
  outputs: {},
  gates: { UserGate },
};
