import { createMutation } from "@farfetched/core";
import { createEffect } from "effector";
import { axios } from "@/api";
import { ConsilliumFillRequestPayload } from "./distributeConsilliumService.types";

export const distributeConsilliumMutation = createMutation({
  effect: createEffect<ConsilliumFillRequestPayload, void>(
    ({ consilliumId, ...payload }): Promise<void> =>
      axios.patch(`consillium/${consilliumId}`, payload)
  ),
});
