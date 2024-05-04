import { createEvent, createStore } from "effector";
import { PushEditTherapyPayload } from "./editTherapyService.types";

const openModal = createEvent();
const closeModal = createEvent();

const handlePushEditTherapy = createEvent<PushEditTherapyPayload>();

const handleSaveTherapy = createEvent();

const $isOpen = createStore(false)
  .on(openModal, () => true)
  .on(closeModal, () => false);

export const editTherapyService = {
  inputs: { openModal, closeModal, handlePushEditTherapy, handleSaveTherapy },
  outputs: { $isOpen },
};
