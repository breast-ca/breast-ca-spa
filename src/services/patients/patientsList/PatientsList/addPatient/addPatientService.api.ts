import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { createEffect } from "effector";

export const createPatientQuery = createQuery({
  handler: createEffect((patientId: string) =>
    axios.post("/patients", { patientId })
  ),
});
