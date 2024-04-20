import { createEvent, createStore, sample } from "effector";
import { createAnalysisMutation } from "./createAnalysisService.api";
import { message } from "antd";
import { getAxiosError } from "@/utils/getAxiosError";

const openModal = createEvent();
const closeModal = createEvent();

const $isModalOpen = createStore(false)
  .on(openModal, () => true)
  .reset(closeModal);

sample({
  clock: createAnalysisMutation.finished.success,
  target: closeModal,
});

createAnalysisMutation.finished.success.watch(() => {
  message.success("Анализ создан!");
});

createAnalysisMutation.finished.failure.watch((e) => {
  message.error(getAxiosError(e.error));
});

export const createAnalysisService = {
  inputs: { openModal, closeModal },
  outputs: { $isModalOpen },
};
