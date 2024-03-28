import { createMutation, createQuery } from "@farfetched/core";
import { axios } from "@/api";
import {
  OrganizationEditDto,
  OrganizationResponseDto,
  UserResponseDto,
} from "@/api/shared";
import { createEffect } from "effector";
import { EffectorAxiosError } from "@/types";

export const organizationQuery = createQuery<[], OrganizationResponseDto>({
  handler: () => axios.get("organization/my"),
});

export const usersListQuery = createQuery<[], UserResponseDto[]>({
  handler: () => axios.get("user"),
});

export const editOrganizationMutation = createMutation({
  effect: createEffect<
    OrganizationEditDto,
    OrganizationResponseDto,
    EffectorAxiosError
  >((data) => axios.patch("organization/edit", data)),
});
