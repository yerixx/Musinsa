import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = ({ authenticate, setAuthenticate }) => {
  return (
    <>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Outlet />
    </>
  );
};

export default Layout;
