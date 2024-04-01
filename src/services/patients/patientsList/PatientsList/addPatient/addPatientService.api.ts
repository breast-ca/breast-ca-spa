import { createMutation } from "@farfetched/core";
import { axios } from "@/api";
import { createEffect } from "effector";
import {
  CreatePatientDto,
  EditPatientDto,
  PatientResponseDto,
} from "@/api/shared";

export const createPatientMutation = createMutation({
  handler: createEffect<CreatePatientDto, PatientResponseDto>((payload) =>
    axios.post("/patient", payload)
  ),
});

export const editPatientMutation = createMutation({
  handler: createEffect<EditPatientDto & { id: number }, PatientResponseDto>(
    ({ id, ...payload }) => axios.patch(`/patient/${id}`, payload)
  ),
});
