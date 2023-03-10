import { useRoutes } from "react-router-dom";

import { Home } from "@/features/home";
// import { useAuth } from "@/lib/auth";

import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  //   const auth = useAuth();
  const auth = {
    user: "josh",
  };

  const commonRoutes = [{ path: "/", element: <Home /> }];

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
