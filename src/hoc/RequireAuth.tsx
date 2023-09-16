import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AuthContextType } from "..//hoc/AuthProvider";
import React from "react"; // Обязательно импортируйте React

export const RequireAuth: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const authContext = useAuth();

  if (!authContext || !authContext.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};
