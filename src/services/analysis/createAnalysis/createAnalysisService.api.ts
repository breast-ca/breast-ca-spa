import { createMutation } from "@farfetched/core";
import { axios } from "@/api";
import { createEffect } from "effector";

export const createAnalysisMutation = createMutation({
  effect: createEffect(() => axios.post("/analysis")),
});
