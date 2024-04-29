import { createMutation } from "@farfetched/core";
import { axios } from "@/api";
import { createEffect } from "effector";
import { EndConsilliumRequestPayload } from "./endConsilliumService.types";

export const endConsilliumMutation = createMutation({
  effect: createEffect<EndConsilliumRequestPayload, void>(
    ({ consilliumId, ...payload }): Promise<void> =>
      axios.patch(`consillium/end/${consilliumId}`, payload)
  ),
});
