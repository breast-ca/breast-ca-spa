import { createMutation } from "@farfetched/core";
import { axios } from "@/api";
import { createEffect } from "effector";
import { UpdateTNMRequestPayload } from "./updateTNMService.types";

export const updateTNMMutation = createMutation({
  effect: createEffect<UpdateTNMRequestPayload, void>(({ id, ...payload }) =>
    axios.patch(`/disease/${id}/tnm`, payload)
  ),
});
