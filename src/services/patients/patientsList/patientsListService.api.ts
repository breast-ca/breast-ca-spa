import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { ResponsePatientDto } from "@/api/shared";

export const parientsQuery = createQuery<void, ResponsePatientDto[]>({
  handler: () => axios.get("/patient/my"),
});
