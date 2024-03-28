import { OrganizationResponseDto, UserResponseDto } from "@/api/shared";

export type Props = {
  organization: OrganizationResponseDto | null;
  isLoading: boolean;
  isAdmin: boolean;
  usersList: UserResponseDto[];
};
