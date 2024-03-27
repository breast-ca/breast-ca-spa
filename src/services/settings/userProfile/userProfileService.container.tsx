import { userService } from "@/services/user";
import { UserProfile } from "./UserProfile";
import { useUnit } from "effector-react";
import { userQuery } from "@/services/user/userService.api";

const {
  gates: { UserGate },
} = userService;

export const UserProfileContainer = () => {
  const { user, isLoading } = useUnit({
    user: userQuery.$data,
    isLoading: userQuery.$pending,
  });

  return (
    <>
      <UserGate />
      <UserProfile user={user} isLoading={isLoading} />
    </>
  );
};
