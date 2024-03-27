import { createMutation } from "@farfetched/core";
import { axios } from "@/api";
import { createEffect } from "effector";
import { EditUserPayload } from "./editUserModalService.types";

export const editUserMutation = createMutation({
  handler: createEffect<EditUserPayload, void>(({ userId, ...userData }) => {
    return axios.patch(`/user/${userId}`, userData);
  }),
});
