import { useUnit } from "effector-react";
import { EditUserModal } from "./EditUserModal";
import { editUserModalService } from ".";
import { rolesTranslatesQuery } from "@/services/user/userService.api";

export const EditUserModalContainer = () => {
  const { userPayload, handleClose, rolesTranslates } = useUnit({
    userPayload: editUserModalService.outputs.$userPayload,
    handleClose: editUserModalService.inputs.handleClose,
    rolesTranslates: rolesTranslatesQuery.$data,
  });

  if (!userPayload || !rolesTranslates) return null;

  return (
    <EditUserModal
      userPayload={userPayload}
      handleClose={handleClose}
      rolesTranslates={rolesTranslates}
    />
  );
};
