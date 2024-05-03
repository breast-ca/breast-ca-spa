import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { TherapyFullResponseDto } from "@/api/shared";

export const therapyQuery = createQuery<[number], TherapyFullResponseDto>({
  handler: (therapyId) => axios.get(`/api/therapy/${therapyId}`),
});
