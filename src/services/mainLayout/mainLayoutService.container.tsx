import { useUnit } from "effector-react";
import { MainLayout } from "./MainLayout";
import { authService } from "../auth/authService.model";
import { userService } from "../user/userService.model";
import { userQuery } from "../user/userService.api";
import { mainLayoutService } from ".";
import { therapyTranslatesService } from "../therapy/therapyTranslates";

const {
  gates: { UserGate },
} = userService;

const {
  gates: { TherapyTranslatesGate },
} = therapyTranslatesService;

export const MainLayoutContainer = () => {
  const { handleSignOut, isAuth, user, patientInfo } = useUnit({
    handleSignOut: authService.inputs.signOut,
    isAuth: authService.outputs.$isAuth,
    user: userQuery.$data,
    patientInfo: mainLayoutService.outputs.$patientInfo,
  });

  return (
    <>
      {isAuth && (
        <>
          <UserGate />
          <TherapyTranslatesGate />
        </>
      )}
      <MainLayout
        handleSignOut={handleSignOut}
        user={user}
        patientInfo={patientInfo}
      />
    </>
  );
};
