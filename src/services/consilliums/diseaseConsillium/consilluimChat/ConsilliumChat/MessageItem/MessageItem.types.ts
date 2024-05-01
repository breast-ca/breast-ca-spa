import { MessageResponseDto, RolesDto, UserResponseDto } from "@/api/shared";

export type Props = {
  message: MessageResponseDto;
  user: UserResponseDto | null;
  rolesTranslates: RolesDto | null;
};
