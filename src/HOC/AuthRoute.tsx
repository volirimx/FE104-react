import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuth] = useState(true);

  if (!isAuth) return <Navigate to={"/"} />;

  return children;
};
