import { RolesDto, UserResponseDto } from "@/api/shared";
import { EditUserPayload } from "../editUserModalService.types";

export type Props = {
  userPayload: UserResponseDto;
  handleClose: () => void;
  rolesTranslates: RolesDto;
  isCurrentUser?: boolean;
  handleEdit: (payload: EditUserPayload) => void;
  isAdmin: boolean;
};
