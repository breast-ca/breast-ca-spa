import { createMutation, createQuery } from "@farfetched/core";
import { axios } from "@/api";
import {
  CreateAnalysisOnTherapyDto,
  TherapyFullResponseDto,
} from "@/api/shared";

export const therapyQuery = createQuery<[number], TherapyFullResponseDto>({
  handler: (therapyId) => axios.get(`therapy/${therapyId}`),
});

export const endTherapyMutation = createMutation<
  { therapyId: number; action: "cancel" | "end" },
  void
>({
  handler: ({ therapyId, action }) =>
    axios.patch(`therapy/${action}/${therapyId}`),
});

export const startConsilliumOnTherapyMutation = createMutation<number, void>({
  handler: (therapyId) => axios.post(`consillium/therapy/${therapyId}`),
});

export const createAnalysisOnTherapyMutation = createMutation<
  CreateAnalysisOnTherapyDto & { therapyId: number },
  void
>({
  handler: ({ therapyId, ...payload }): Promise<void> =>
    axios.post(`therapy/analysis/${therapyId}/create`, payload),
});
