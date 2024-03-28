import { RolesDto } from "@/api/shared";
import { AddUserPayload } from "../createUserModalService.types";

export type Props = {
  handleClose: () => void;
  rolesTranslates: RolesDto;
  handleAddUser: (payload: AddUserPayload) => void;
  isModalOpen: boolean;
};
