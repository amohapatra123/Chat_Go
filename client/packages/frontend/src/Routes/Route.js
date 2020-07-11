import React from "react";

const Signup = React.lazy(() => import("../Components/SignUp"));
// const Login = React.lazy(() => import("../Components/Login"));
export const routes = [
  {
    path: "/signup",
    component: Signup,
  },
  // {
  //   path: "/login",
  //   component: Login,
  // },
];
