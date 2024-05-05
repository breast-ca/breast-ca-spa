import { createMutation } from "@farfetched/core";
import { axios } from "@/api";
import { OperationFillDto, RadiationTherapyFillDto } from "@/api/shared";
import { WithTherapyId } from "./editTherapyService.types";

export const fillRadiationTherapyMutation = createMutation<
  WithTherapyId<RadiationTherapyFillDto>,
  void
>({
  handler: ({ therapyId, ...payload }): Promise<void> =>
    axios.patch(`therapy/fill/${therapyId}/radiation`, payload),
});

export const fillOperationTherapyMutation = createMutation<
  WithTherapyId<OperationFillDto>,
  void
>({
  handler: ({ therapyId, ...payload }): Promise<void> =>
    axios.patch(`therapy/fill/${therapyId}/operation`, payload),
});
