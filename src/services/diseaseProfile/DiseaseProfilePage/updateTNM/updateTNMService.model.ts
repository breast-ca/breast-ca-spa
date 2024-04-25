import { createEvent, createStore, sample } from "effector";
import { updateTNMMutation } from "./updateTNMService.api";
import { message } from "antd";

const openModal = createEvent();
const closeModal = createEvent();

const $isModalOpen = createStore(false)
  .on(openModal, () => true)
  .reset(closeModal);

sample({
  clock: updateTNMMutation.finished.success,
  target: closeModal,
});

updateTNMMutation.finished.success.watch(() => message.success("TNM сохранен"));

export const updateTNMService = {
  inputs: {
    openModal,
    closeModal,
  },
  outputs: { $isModalOpen },
};
