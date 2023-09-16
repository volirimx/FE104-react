import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { updateToken } from "../redux/user/user";

export const useUpdateTokens = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const refreshTokenFromLS = localStorage.getItem("refreshToken");
      if (refreshTokenFromLS) {
        dispatch(updateToken(refreshTokenFromLS));
      }
    }, 270000);
    return () => clearInterval(interval);
  }, []);
};
