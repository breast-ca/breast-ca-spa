import { EffectorAxiosError } from "@/types";

export const getAxiosError = (err: EffectorAxiosError) => {
  return err?.response?.data?.message || "Ошибка запроса!";
};
