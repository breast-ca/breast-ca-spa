import { UserResponseDto } from "@/api/shared";

export type Props = {
  handleOpenDrawer: () => void;
  user: UserResponseDto | null;
};
