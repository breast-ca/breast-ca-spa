import { axios } from "@/api";
import { createMutation } from "@farfetched/core";
import { createEffect } from "effector";
import { CreateDiseaseRequestPayload } from "../../patients/patientProfile/PatientsProfile/diseasesList/diseasesListService.types";
import { DiseaseResponseDto } from "@/api/shared";
import { EffectorAxiosError } from "@/types";

export const createDiseaseMutation = createMutation({
  effect: createEffect<
    CreateDiseaseRequestPayload,
    DiseaseResponseDto,
    EffectorAxiosError
  >(({ patientId, ...data }) => axios.post(`disease/${patientId}`, data)),
});
