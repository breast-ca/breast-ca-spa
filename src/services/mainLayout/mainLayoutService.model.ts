import { PatientResponseDto } from "@/api/shared";
import { createEvent, createStore } from "effector";

const setPatientInfo = createEvent<PatientResponseDto>();
const resetPatientInfo = createEvent();

const $patientInfo = createStore<PatientResponseDto | null>(null)
  .on(setPatientInfo, (_, data) => data)
  .reset(resetPatientInfo);

export const mainLayoutService = {
  inputs: { setPatientInfo, resetPatientInfo },
  outputs: { $patientInfo },
};
