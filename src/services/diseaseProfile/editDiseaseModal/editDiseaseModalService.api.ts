import { axios } from "@/api";
import { createMutation } from "@farfetched/core";
import { createEffect } from "effector";
import { EditDiseaseRequestPayload } from "./editDiseaseModalService.types";
import { DiseaseResponseDto } from "@/api/shared";
import { EffectorAxiosError } from "@/types";

export const editDiseaseMutation = createMutation({
  effect: createEffect<
    EditDiseaseRequestPayload,
    DiseaseResponseDto,
    EffectorAxiosError
  >(({ id, ...data }) => axios.patch(`/disease/${id}`, data)),
});
