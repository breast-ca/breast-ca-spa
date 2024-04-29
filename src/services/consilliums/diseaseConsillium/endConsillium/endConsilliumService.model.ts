import { createEvent, createStore, sample } from "effector";
import { endConsilliumMutation } from "./endConsilliumService.api";
import { message } from "antd";

const openModal = createEvent();
const closeModal = createEvent();

const $isModalOpen = createStore(false)
  .on(openModal, () => true)
  .on(closeModal, () => false);

sample({
  clock: endConsilliumMutation.finished.success,
  target: closeModal,
});

endConsilliumMutation.finished.success.watch(() =>
  message.success("Консиллиум завершен!")
);

export const endConsilliumService = {
  inputs: { openModal, closeModal },
  outputs: { $isModalOpen },
};
