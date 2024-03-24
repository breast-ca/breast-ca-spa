import { useUnit } from "effector-react";
import { MainLayout } from "./MainLayout";
import { authService } from "../auth/authService.model";

export const MainLayoutContainer = () => {
  const { handleSignOut } = useUnit({
    handleSignOut: authService.inputs.signOut,
  });

  return <MainLayout handleSignOut={handleSignOut} />;
};
