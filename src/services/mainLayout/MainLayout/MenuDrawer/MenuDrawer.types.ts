import { UserResponseDto } from "@/api/shared";

export type Props = {
  isDrawerOpen: boolean;
  handleClose: () => void;
  handleSignOut: () => void;
  user: UserResponseDto | null;
};
