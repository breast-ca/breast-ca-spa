import { sample } from "effector";
import { createGate } from "effector-react";
import { rolesTranslatesQuery, userQuery } from "./userService.api";

const UserGate = createGate();

sample({
  clock: UserGate.open,
  target: [userQuery.start, rolesTranslatesQuery.start],
});

export const userService = {
  inputs: {},
  outputs: {},
  gates: { UserGate },
};
