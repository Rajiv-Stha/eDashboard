import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const PrivateComponent = () => {
  const auth = localStorage.getItem("user");
  console.log("auth", auth);

  return auth ? <Outlet /> : <Navigate to="/SignUp" />;
};

export default PrivateComponent;
