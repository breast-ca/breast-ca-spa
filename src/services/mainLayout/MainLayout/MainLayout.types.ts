import { UserResponseDto } from "@/api/shared";

export type Props = {
  handleSignOut: () => void;
  user: UserResponseDto | null;
};
