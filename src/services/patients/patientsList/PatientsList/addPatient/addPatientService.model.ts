import { createEvent, createStore, sample } from "effector";
import { createPatientMutation } from "./addPatientService.api";
import { message } from "antd";

const handleOpenModal = createEvent();
const handleCloseModal = createEvent();

const $isModalOpen = createStore(false)
  .on(handleOpenModal, () => true)
  .on(handleCloseModal, () => false);

sample({
  clock: createPatientMutation.finished.success,
  target: handleCloseModal,
});

createPatientMutation.finished.success.watch(() =>
  message.success("Пациент добавлен!")
);

createPatientMutation.finished.failure.watch(() =>
  message.error("Ошибка запроса!")
);

export const addPatientService = {
  inputs: {
    handleOpenModal,
    handleCloseModal,
  },
  outputs: { $isModalOpen },
};
