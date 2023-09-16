import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export const EmailActivation = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  console.log(uid, token);

  useEffect(() => {
    if (uid && token) {
      (async () => {
        const response = await axios.post(
          "https://studapi.teachmeskills.by/auth/users/activation/",
          { uid, token }
        );
        console.log(response);
        navigate("/");
      })();
    }
  }, [uid, token]);

  return <div></div>;
};
