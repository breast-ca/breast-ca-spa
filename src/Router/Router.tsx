import { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import { getRoutes } from "./Routes.constants";
import { useUnit } from "effector-react";
import { authService } from "@/services/auth/authService.model";
import { userQuery } from "@/services/user/userService.api";

export const Router = () => {
  const { isAuth, user } = useUnit({
    isAuth: authService.outputs.$isAuth,
    user: userQuery.$data,
  });

  const routes = useMemo(() => getRoutes({ isAuth, user }), [isAuth, user]);

  const router = useRoutes(routes);

  return router;
};
