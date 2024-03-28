import { createEvent, createStore, sample } from "effector";
import { message } from "antd";
import { addUserMutation } from "./createUserModalService.api";
import { getAxiosError } from "@/utils/getAxiosError";

const handleAddUser = createEvent();
const handleClose = createEvent();

const $isModalOpen = createStore(false)
  .on(handleAddUser, () => true)
  .reset(handleClose);

sample({
  clock: addUserMutation.finished.success,
  target: handleClose,
});

addUserMutation.finished.success.watch(() => {
  message.success("Пользователь создан!");
});

addUserMutation.finished.failure.watch((e) => {
  message.error(getAxiosError(e.error));
});

export const addUserModalService = {
  inputs: { handleAddUser, handleClose },
  outputs: { $isModalOpen },
};
