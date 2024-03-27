import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { OrganizationResponseDto } from "@/api/shared";

export const organizationQuery = createQuery<void, OrganizationResponseDto>({
  handler: () => axios.get("organization/my"),
});
