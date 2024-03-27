import { UserResponseDto } from "@/api/shared";

export type Props = {
  user: UserResponseDto | null;
  isLoading: boolean;
};
