import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { DiseaseTranslateDto } from "@/api/shared";

export const diseaseEnumsTranslationsQuery = createQuery<
  [],
  DiseaseTranslateDto
>({
  handler: () => axios.get("disease/translates"),
});
