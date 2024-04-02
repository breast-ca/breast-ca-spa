import { DiseaseFullResponseDto } from "@/api/shared";
import { createEvent, createStore, sample } from "effector";
import { editDiseaseMutation } from "./editDiseaseModalService.api";
import { message } from "antd";

const handleEdit = createEvent<DiseaseFullResponseDto>();
const handleClose = createEvent();

const $payload = createStore<DiseaseFullResponseDto | null>(null)
  .on(handleEdit, (_, payload) => payload)
  .reset(handleClose);

sample({
  clock: editDiseaseMutation.finished.success,
  target: handleClose,
});

editDiseaseMutation.finished.success.watch(() => message.success("Сохранено!"));

export const editDiseaseModalService = {
  inputs: { handleEdit, handleClose },
  outputs: { $payload },
};
