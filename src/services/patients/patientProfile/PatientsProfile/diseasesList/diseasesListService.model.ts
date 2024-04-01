import { createGate } from "effector-react";
import { createDiseaseMutation } from "./diseasesListService.api";
import { message } from "antd";
import { getAxiosError } from "@/utils/getAxiosError";
import { sample } from "effector";
import { createDiseaseModalService } from "./createDiseaseModal";

const DiseasesGate = createGate();

createDiseaseMutation.finished.success.watch(() =>
  message.success("Паспорт создан!")
);

createDiseaseMutation.finished.failure.watch((e) =>
  message.error(getAxiosError(e.error))
);

sample({
  source: createDiseaseMutation.finished.success,
  target: createDiseaseModalService.inputs.closeModal,
});

export const diseasesListService = {
  inputs: {},
  outputs: {},
  gates: { DiseasesGate },
};
