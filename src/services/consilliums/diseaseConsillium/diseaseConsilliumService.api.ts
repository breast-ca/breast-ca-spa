import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { ConsilliumResponseDto } from "@/api/shared";

export const consilliumQuery = createQuery<[number], ConsilliumResponseDto>({
  handler: (consilliumId) => axios.get(`consillium/${consilliumId}`),
});
