import { useUnit } from "effector-react";
import { LoginPage } from "./LoginPage";
import { loginQuery } from "./loginService.api";
import "./loginService.model";

export const LoginContainer = () => {
  const { handleLogin, isLoading } = useUnit({
    handleLogin: loginQuery.start,
    isLoading: loginQuery.$pending,
  });

  return <LoginPage handleLogin={handleLogin} isLoading={isLoading} />;
};
