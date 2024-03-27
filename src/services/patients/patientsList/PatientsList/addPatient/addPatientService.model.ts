import { createEvent, createStore, sample } from "effector";
import {
  createPatientMutation,
  editPatientMutation,
} from "./addPatientService.api";
import { message } from "antd";
import { ResponsePatientDto } from "@/api/shared";

const handleOpenModal = createEvent<ResponsePatientDto | void>();
const handleCloseModal = createEvent();

const $payload = createStore<ResponsePatientDto | null>(null)
  .on(handleOpenModal, (prev, payload) => payload || prev)
  .reset(handleCloseModal);

const $isModalOpen = createStore(false)
  .on(handleOpenModal, () => true)
  .on(handleCloseModal, () => false);

sample({
  clock: [
    createPatientMutation.finished.success,
    editPatientMutation.finished.success,
  ],
  target: handleCloseModal,
});

createPatientMutation.finished.success.watch(() =>
  message.success("Пациент добавлен!")
);

createPatientMutation.finished.failure.watch(() =>
  message.error("Ошибка запроса!")
);

editPatientMutation.finished.success.watch(() =>
  message.success("Данные пациента сохранены!")
);

editPatientMutation.finished.failure.watch(() =>
  message.error("Ошибка запроса!")
);

export const addPatientService = {
  inputs: {
    handleOpenModal,
    handleCloseModal,
  },
  outputs: { $isModalOpen, $payload },
};
