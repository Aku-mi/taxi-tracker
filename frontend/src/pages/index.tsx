import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { NotFound } from "./NotFound";
import { Register } from "./Register";
import { Router } from "../components";
import { Login } from "./Login";
import { About } from "./About";
import { Home } from "./Home";
import { Live } from "./Live";

export const Pages: React.FC = () => {
  const user = useSelector((state: RootState) => state.userReducer.user);

  return (
    <Router
      pages={[
        { component: Home, path: "/", label: "Home", enabled: true },
        {
          component: Login,
          path: "/login",
          label: "Sign In",
          enabled: user.id === "",
        },
        {
          component: Register,
          path: "/register",
          label: "Sign Up",
          enabled: user.id === "",
        },
        {
          component: Live,
          path: "/live",
          label: "Live",
          enabled: user.id !== "",
        },
        {
          component: About,
          path: "/about",
          label: "About",
          enabled: user.id === "",
        },
        { component: NotFound, path: "*", label: "404" },
      ]}
      profile={user.id !== ""}
    />
  );
};
