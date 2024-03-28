import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { OrganizationResponseDto, UserResponseDto } from "@/api/shared";

export const organizationQuery = createQuery<void, OrganizationResponseDto>({
  handler: () => axios.get("organization/my"),
});

export const usersListQuery = createQuery<void, UserResponseDto[]>({
  handler: () => axios.get("user"),
});
