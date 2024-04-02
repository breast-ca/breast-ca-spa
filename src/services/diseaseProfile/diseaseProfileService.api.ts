import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { DiseaseFullResponseDto } from "@/api/shared";

export const diseaseQuery = createQuery<[number], DiseaseFullResponseDto>({
  handler: (id) => axios.get(`disease/${id}`),
});
