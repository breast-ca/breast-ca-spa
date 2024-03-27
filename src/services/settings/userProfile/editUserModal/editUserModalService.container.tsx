import { useUnit } from "effector-react";
import { EditUserModal } from "./EditUserModal";
import { editUserModalService } from ".";
import {
  rolesTranslatesQuery,
  userQuery,
} from "@/services/user/userService.api";
import { editUserMutation } from "./editUserModalService.api";

export const EditUserModalContainer = () => {
  const { userPayload, handleClose, rolesTranslates, currentUser, handleEdit } =
    useUnit({
      userPayload: editUserModalService.outputs.$userPayload,
      handleClose: editUserModalService.inputs.handleClose,
      rolesTranslates: rolesTranslatesQuery.$data,
      currentUser: userQuery.$data,
      handleEdit: editUserMutation.start,
    });

  if (!userPayload || !rolesTranslates) return null;

  return (
    <EditUserModal
      userPayload={userPayload}
      handleClose={handleClose}
      rolesTranslates={rolesTranslates}
      isCurrentUser={userPayload?.id === currentUser?.id}
      handleEdit={handleEdit}
    />
  );
};
