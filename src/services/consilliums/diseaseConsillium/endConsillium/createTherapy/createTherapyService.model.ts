import { createEvent, createStore } from "effector";

const openModal = createEvent();
const closeModal = createEvent();
const handleSaveTherapy = createEvent();

const $isModalOpen = createStore(false)
  .on(openModal, () => true)
  .on(closeModal, () => false);

export const createTherapyService = {
  inputs: { openModal, closeModal, handleSaveTherapy },
  outputs: { $isModalOpen },
};
