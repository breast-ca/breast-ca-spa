import { PatientFullResponseDto } from "@/api/shared";
import { createEvent, createStore } from "effector";

const setPatientInfo = createEvent<PatientFullResponseDto>();
const resetPatientInfo = createEvent();

const $patientInfo = createStore<PatientFullResponseDto | null>(null)
  .on(setPatientInfo, (_, data) => data)
  .reset(resetPatientInfo);

export const mainLayoutService = {
  inputs: { setPatientInfo, resetPatientInfo },
  outputs: { $patientInfo },
};
