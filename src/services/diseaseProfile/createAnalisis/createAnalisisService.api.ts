import { createMutation } from "@farfetched/core";
import { axios } from "@/api";
import { createEffect } from "effector";

export const createAnalisisMutation = createMutation({
  effect: createEffect(() => axios.post("/analisis")),
});
