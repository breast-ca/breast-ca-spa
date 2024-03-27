import { UserResponseDto } from "@/api/shared";
import { createEvent, createStore, sample } from "effector";
import { editUserMutation } from "./editUserModalService.api";
import { message } from "antd";

const handleEditUser = createEvent<UserResponseDto>();
const handleClose = createEvent();

const $userPayload = createStore<UserResponseDto | null>(null)
  .on(handleEditUser, (_, payload) => payload)
  .reset(handleClose);

sample({
  clock: editUserMutation.finished.success,
  target: handleClose,
});

editUserMutation.finished.success.watch(() => {
  message.success("Данные сохранены!");
});

editUserMutation.finished.failure.watch(() => {
  message.error("Ошибка запроса!");
});

export const editUserModalService = {
  inputs: { handleEditUser, handleClose },
  outputs: { $userPayload },
};
