import { OrganizationResponseDto } from "@/api/shared";

export type Props = {
  organization: OrganizationResponseDto | null;
  isLoading: boolean;
};
