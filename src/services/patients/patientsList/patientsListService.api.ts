import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { PatientsListResponseDto } from "@/api/shared";

export const parientsQuery = createQuery<[], PatientsListResponseDto>({
  handler: () => axios.get("/patient/my"),
});
