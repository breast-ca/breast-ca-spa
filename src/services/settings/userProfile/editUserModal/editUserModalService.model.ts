import { UserResponseDto } from "@/api/shared";
import { createEvent, createStore } from "effector";

const handleEditUser = createEvent<UserResponseDto>();
const handleClose = createEvent();

const $userPayload = createStore<UserResponseDto | null>(null)
  .on(handleEditUser, (_, payload) => payload)
  .reset(handleClose);

export const editUserModalService = {
  inputs: { handleEditUser, handleClose },
  outputs: { $userPayload },
};
