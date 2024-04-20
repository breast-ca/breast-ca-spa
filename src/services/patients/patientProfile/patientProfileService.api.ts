import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { PatientFullResponseDto } from "@/api/shared";

export const patientQuery = createQuery<[number], PatientFullResponseDto>({
  handler: (id) => axios.get(`/patient/${id}`),
});
