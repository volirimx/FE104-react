import styles from "./logIn.module.css";
import { useState, useContext } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";

import ContextTheme from "../../ContextTheme";
import axios from "axios";
import { generateInputChangeHandler } from "../../utils/utils";

const LogIn = () => {
  const [show, setShowPassword] = useState<boolean>(false);
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValuePassword, setInputValuePassword] = useState("");
  const navigate = useNavigate();
  const toogleShowPassword = () => {
    setShowPassword(!show);
  };

  const { darkMode } = useContext(ContextTheme);

  const login = async () => {
    const response = await axios.post(
      "https://studapi.teachmeskills.by/auth/jwt/create/",
      { email: inputValueEmail, password: inputValuePassword }
    );
    if (response.status === 200) {
      navigate("/confirm");
      localStorage.setItem("refreshToken", response.data.refresh);
      localStorage.setItem("accessToken", response.data.access);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.back}>
        <Link className={styles.back__button} to="/">
          Back to Home
        </Link>
      </div>
      <h1>Log In</h1>

      <div className={styles.form}>
        <div className={styles.form__content}>
          <Input
            value={inputValueEmail}
            title="Email"
            id="email"
            height="30px"
            placeholder="Email"
            handleChange={generateInputChangeHandler(setInputValueEmail)}
            border={darkMode ? "1px solid white" : "1px solid darkred"}
          />
          <Input
            value={inputValuePassword}
            title="Password"
            type={show ? "text" : "password"}
            id="pass"
            height="30px"
            placeholder="Password"
            border={darkMode ? "1px solid white" : "1px solid darkred"}
            handleChange={generateInputChangeHandler(setInputValuePassword)}
          />
          <input
            onClick={toogleShowPassword}
            id="showPawword"
            type="checkbox"
          />
          <label htmlFor="showPassword">Показать пароль</label>
          <Button
            handleClick={login}
            title="Log In"
            mode="primary"
            disabled={false}
          />
          <p>
            Haven't an account? <a href="#!">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
