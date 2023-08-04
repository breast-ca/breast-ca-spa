import { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import { getRoutes } from "./Routes.constants";

export const Router = () => {
  const routes = useMemo(() => getRoutes({ isAuth: false }), []);

  const router = useRoutes(routes);

  return router;
};
