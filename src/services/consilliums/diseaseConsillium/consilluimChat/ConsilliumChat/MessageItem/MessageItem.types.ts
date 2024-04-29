import { MessageResponseDto, UserResponseDto } from "@/api/shared";

export type Props = {
  message: MessageResponseDto;
  user: UserResponseDto | null;
};
