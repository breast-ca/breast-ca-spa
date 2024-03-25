import { createEvent, createStore } from "effector";

const handleOpenModal = createEvent();
const handleCloseModal = createEvent();

const $isModalOpen = createStore(false)
  .on(handleOpenModal, () => true)
  .on(handleCloseModal, () => false);

export const addPatientService = {
  inputs: {
    handleOpenModal,
    handleCloseModal,
  },
  outputs: { $isModalOpen },
};
