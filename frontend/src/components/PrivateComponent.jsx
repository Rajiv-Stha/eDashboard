import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./navbar/Navbar";
const PrivateComponent = () => {
  const auth = localStorage.getItem("user");
  console.log("auth", auth);

  return (
    <>
      <Navbar />
      {auth ? <Outlet /> : <Navigate to="/SignUp" />}
    </>
  );
};

export default PrivateComponent;
