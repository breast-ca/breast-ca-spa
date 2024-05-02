import { createEvent, createStore } from "effector";

const openModal = createEvent();
const closeModal = createEvent();

const $isModalOpen = createStore(false)
  .on(openModal, () => true)
  .on(closeModal, () => false);

export const createTherapyService = {
  inputs: { openModal, closeModal },
  outputs: { $isModalOpen },
};
