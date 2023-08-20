import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Подставьте корректный путь до файла useAuth
import { AuthContextType } from "..//hoc/AuthProvider";


export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const authContext: AuthContextType | null = useAuth();

  if (!authContext || !authContext.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};
