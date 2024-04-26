import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { ConsilliumResponseDto } from "@/api/shared";

export const diseaseConsilliumsListQuery = createQuery<
  [number],
  ConsilliumResponseDto[]
>({
  handler: (diseaseId) => axios.get(`consillium/disease/${diseaseId}`),
});
