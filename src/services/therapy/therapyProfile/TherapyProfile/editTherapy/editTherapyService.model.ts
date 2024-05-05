import { createEvent, createStore, merge, sample } from "effector";
import { PushEditTherapyPayload } from "./editTherapyService.types";
import {
  fillChemotherapyMutation,
  fillOperationTherapyMutation,
  fillRadiationTherapyMutation,
} from "./editTherapyService.api";
import { therapyProfileService } from "../../therapyProfileService.model";
import { message } from "antd";

const openModal = createEvent();
const closeModal = createEvent();

const handlePushEditTherapy = createEvent<PushEditTherapyPayload>();

const handleSaveTherapy = createEvent();

const $isOpen = createStore(false)
  .on(openModal, () => true)
  .on(closeModal, () => false);

const handleCompleteEdit = merge([
  fillRadiationTherapyMutation.finished.success,
  fillOperationTherapyMutation.finished.success,
  fillChemotherapyMutation.finished.success,
]);

sample({
  clock: handleCompleteEdit,
  target: [closeModal, therapyProfileService.inputs.refetch],
});

handleCompleteEdit.watch(() => {
  message.success("Данные сохранены!");
});

export const editTherapyService = {
  inputs: { openModal, closeModal, handlePushEditTherapy, handleSaveTherapy },
  outputs: { $isOpen },
};
