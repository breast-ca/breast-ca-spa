import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { ResponsePatientDto } from "@/api/shared";

export const patientQuery = createQuery<number, ResponsePatientDto>({
  handler: (id) => axios.get(`/patient/${id}`),
});
