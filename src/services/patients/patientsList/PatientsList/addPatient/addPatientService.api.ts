import { createMutation } from "@farfetched/core";
import { axios } from "@/api";
import { createEffect } from "effector";
import { CreatePatientDto, ResponsePatientDto } from "@/api/shared";

export const createPatientMutation = createMutation({
  handler: createEffect<CreatePatientDto, ResponsePatientDto>((payload) =>
    axios.post("/patient", payload)
  ),
});
