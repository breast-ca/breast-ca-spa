import { EditUserModal } from "./createUserModal";
import { rolesTranslatesQuery } from "@/services/user/userService.api";
import { addUserMutation } from "./createUserModalService.api";
import { addUserModalService } from ".";
import { useUnit } from "effector-react";

export const CreateUserModalContainer = () => {
  const { handleClose, rolesTranslates, isModalOpen } = useUnit({
    rolesTranslates: rolesTranslatesQuery.$data,
    handleClose: addUserModalService.inputs.handleClose,
    isModalOpen: addUserModalService.outputs.$isModalOpen,
  });

  const [handleAddUser] = useUnit([addUserMutation.start]);

  if (!rolesTranslates) return null;

  return (
    <EditUserModal
      handleClose={handleClose}
      rolesTranslates={rolesTranslates}
      handleAddUser={handleAddUser}
      isModalOpen={isModalOpen}
    />
  );
};
