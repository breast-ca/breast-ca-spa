import { UserResponseDto } from "@/api/shared";

export type Props = {
  user: UserResponseDto;
  translates: Record<string, string>;
  handleEditUser: (payload: UserResponseDto) => void;
};
