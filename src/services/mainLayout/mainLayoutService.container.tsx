import { useUnit } from "effector-react";
import { MainLayout } from "./MainLayout";
import { authService } from "../auth/authService.model";
import { userService } from "../user/userService.model";
import { userQuery } from "../user/userService.api";

const {
  gates: { UserGate },
} = userService;

export const MainLayoutContainer = () => {
  const { handleSignOut, isAuth, user } = useUnit({
    handleSignOut: authService.inputs.signOut,
    isAuth: authService.outputs.$isAuth,
    user: userQuery.$data,
  });

  return (
    <>
      {isAuth && <UserGate />}
      <MainLayout handleSignOut={handleSignOut} user={user} />
    </>
  );
};
