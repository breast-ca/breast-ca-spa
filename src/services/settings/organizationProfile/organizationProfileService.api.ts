import { createMutation, createQuery } from "@farfetched/core";
import { axios } from "@/api";
import {
  OrganizationEditDto,
  OrganizationResponseDto,
  UserResponseDto,
} from "@/api/shared";

export const organizationQuery = createQuery<[], OrganizationResponseDto>({
  handler: () => axios.get("organization/my"),
});

export const usersListQuery = createQuery<[], UserResponseDto[]>({
  handler: () => axios.get("user"),
});

export const editOrganizationMutation = createMutation<
  OrganizationEditDto,
  OrganizationResponseDto
>({
  handler: (data) => axios.patch("organization/edit", data),
});
