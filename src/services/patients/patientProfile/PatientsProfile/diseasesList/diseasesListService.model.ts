import { createGate } from "effector-react";
import { diseasesListQuery } from "./diseasesListService.api";
import { message } from "antd";
import { getAxiosError } from "@/utils/getAxiosError";
import { sample } from "effector";
import { createDiseaseModalService } from "../../../../diseaseProfile/createDiseaseModal";
import { createDiseaseMutation } from "../../../../diseaseProfile/createDiseaseModal/createDiseaseModalService.api";

const DiseasesGate = createGate<{ patientId: number }>();

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

sample({
  clock: [DiseasesGate.open, createDiseaseMutation.finished.success],
  source: DiseasesGate.state,
  fn: ({ patientId }) => patientId,
  target: diseasesListQuery.start,
});

export const diseasesListService = {
  inputs: {},
  outputs: {},
  gates: { DiseasesGate },
};
