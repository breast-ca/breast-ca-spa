import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { TherapyLightResponseDto } from "@/api/shared";

export const diseaseTherapyListQuery = createQuery<
  [number],
  TherapyLightResponseDto[]
>({
  handler: (diseaseId) => axios.get(`therapy/disease/${diseaseId}`),
});
