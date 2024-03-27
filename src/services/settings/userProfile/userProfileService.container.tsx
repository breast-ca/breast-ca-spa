import { userService } from "@/services/user";
import { UserProfile } from "./UserProfile";
import { useUnit } from "effector-react";
import { userQuery } from "@/services/user/userService.api";
import { editUserModalService } from "./editUserModal";

const {
  gates: { UserGate },
} = userService;

export const UserProfileContainer = () => {
  const { user, isLoading, handleEditUser } = useUnit({
    user: userQuery.$data,
    isLoading: userQuery.$pending,
    handleEditUser: editUserModalService.inputs.handleEditUser,
  });

  return (
    <>
      <UserGate />
      <UserProfile
        user={user}
        isLoading={isLoading}
        handleEditUser={handleEditUser}
      />
    </>
  );
};
