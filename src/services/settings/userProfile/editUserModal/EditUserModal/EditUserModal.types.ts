import { RolesDto, UserResponseDto } from "@/api/shared";

export type Props = {
  userPayload: UserResponseDto;
  handleClose: () => void;
  rolesTranslates: RolesDto;
};
