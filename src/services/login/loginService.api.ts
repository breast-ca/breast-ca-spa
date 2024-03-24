import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { createEffect } from "effector";
import { LoginDto, LoginResponseDto } from "@/api/shared";

export const loginQuery = createQuery({
  handler: createEffect<LoginDto, LoginResponseDto>((payload) =>
    axios.post("auth/login", payload)
  ),
});
