import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { RolesDto, UserResponseDto } from "@/api/shared";

export const userQuery = createQuery<[], UserResponseDto>({
  handler: () => axios.get("/user/profile"),
});

export const rolesTranslatesQuery = createQuery<[], RolesDto>({
  handler: () => axios.get("/user/roles"),
});
