import { sample } from "effector";
import { loginQuery } from "./loginService.api";
import { authService } from "../auth/authService.model";
import { message } from "antd";

sample({
  clock: loginQuery.finished.success,
  fn: ({ result }) => result,
  target: authService.inputs.tokenReceived,
});

loginQuery.finished.failure.watch((payload) => {
  console.log(payload);

  message.error("Неверный логин или пароль");
});

export const loginService = {
  inputs: {},
  outputs: {},
};
