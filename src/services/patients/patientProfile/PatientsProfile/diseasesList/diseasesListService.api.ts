import { createMutation, createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { DiseaseTranslateDto } from "@/api/shared";
import { createEffect } from "effector";
import { CreateDiseaseRequestPayload } from "./diseasesListService.types";

export const diseaseEnumsTranslationsQuery = createQuery<
  [],
  DiseaseTranslateDto
>({
  handler: () => axios.get("disease/translates"),
});

export const createDiseaseMutation = createMutation({
  handler: createEffect<CreateDiseaseRequestPayload, void>(() =>
    axios.post("disease/create")
  ),
});
