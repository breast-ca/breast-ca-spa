import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { RolesDto, UserResponseDto } from "@/api/shared";

export const userQuery = createQuery<void, UserResponseDto>({
  handler: () => axios.get("/user/profile"),
});

export const rolesTranslatesQuery = createQuery<void, RolesDto>({
  handler: () => axios.get("/user/roles"),
});
