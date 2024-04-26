import { createEvent, createStore } from "effector";

const handleOpen = createEvent();
const handleClose = createEvent();

const $isOpen = createStore(false)
  .on(handleOpen, () => true)
  .reset(handleClose);

export const distributeConsilliumService = {
  inputs: { handleOpen, handleClose },
  outputs: { $isOpen },
};
