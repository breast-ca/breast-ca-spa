import { createEvent, createStore, sample } from "effector";
import { distributeConsilliumMutation } from "./distributeConsilliumService.api";
import { message } from "antd";

const handleOpen = createEvent();
const handleClose = createEvent();

const $isOpen = createStore(false)
  .on(handleOpen, () => true)
  .reset(handleClose);

sample({
  clock: distributeConsilliumMutation.finished.success,
  target: handleClose,
});

distributeConsilliumMutation.finished.success.watch(() =>
  message.success("Участники консилиума определены")
);

export const distributeConsilliumService = {
  inputs: { handleOpen, handleClose },
  outputs: { $isOpen },
};
