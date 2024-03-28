import { createMutation } from "@farfetched/core";
import { axios } from "@/api";
import { createEffect } from "effector";
import { AddUserPayload } from "./createUserModalService.types";
import { EffectorAxiosError } from "@/types";

export const addUserMutation = createMutation({
  effect: createEffect<AddUserPayload, void, EffectorAxiosError>((payload) => {
    return axios.post(`/user/add`, payload);
  }),
});
