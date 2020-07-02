import React from "react";

const Join = React.lazy(() => import("../Components/Join"));
const Chat = React.lazy(() => import("../Components/Chat"));
export const routes = [
  {
    path: "/",
    component: Join,
  },
  {
    path: "/chat",
    component: Chat,
  },
];
