import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { PatientsListResponseDto } from "@/api/shared";
import { PatientsListQuery } from "./patientsListService.types";

export const parientsQuery = createQuery<
  [PatientsListQuery],
  PatientsListResponseDto
>({
  handler: (params): Promise<PatientsListResponseDto> =>
    axios.get("/patient", { params }),
});
