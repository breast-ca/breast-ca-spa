import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { DiseaseResponseDto, DiseaseTranslateDto } from "@/api/shared";


export const diseaseEnumsTranslationsQuery = createQuery<
  [],
  DiseaseTranslateDto
>({
  handler: () => axios.get("disease/translates"),
});

export const diseasesListQuery = createQuery<[number], DiseaseResponseDto[]>({
  handler: (patientId) => axios.get(`disease/all/${patientId}`),
});