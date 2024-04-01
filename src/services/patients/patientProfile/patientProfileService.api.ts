import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { PatientResponseDto } from "@/api/shared";

export const patientQuery = createQuery<number, PatientResponseDto>({
  handler: (id) => axios.get(`/patient/${id}`),
});
