import { createMutation, createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { DiseaseResponseDto, DiseaseTranslateDto } from "@/api/shared";
import { createEffect } from "effector";
import { CreateDiseaseRequestPayload } from "./diseasesListService.types";
import { EffectorAxiosError } from "@/types";

export const diseaseEnumsTranslationsQuery = createQuery<
  [],
  DiseaseTranslateDto
>({
  handler: () => axios.get("disease/translates"),
});

export const diseasesListQuery = createQuery<[number], DiseaseResponseDto[]>({
  handler: (patientId) => axios.get(`disease/all/${patientId}`),
});

export const createDiseaseMutation = createMutation({
  effect: createEffect<
    CreateDiseaseRequestPayload,
    DiseaseResponseDto,
    EffectorAxiosError
  >(({ patientId, ...data }) => axios.post(`disease/${patientId}`, data)),
});
