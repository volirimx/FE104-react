import styles from "./logIn.module.css";
import { useState, ChangeEvent, SetStateAction, useContext } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../../components/Users/Users";
import ContextTheme from "../../ContextTheme";

const LogIn = () => {
  const [show, setShowPassword] = useState<boolean>(false);
  const toogleShowPassword = () => {
    setShowPassword(!show);
  };

  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValuePassword, setInputValuePassword] = useState("");

  const navigate = useNavigate();

  const generateInputChangeHandler =
    (stateSetter: React.Dispatch<SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.target;
      stateSetter(target.value);
    };

  const validation = () => {
    const usersFromLocalStorage = localStorage.getItem("Users");
    const users: User[] = usersFromLocalStorage
      ? JSON.parse(usersFromLocalStorage)
      : [];
    if (
      users.find((user) => {
        return (
          user.email == inputValueEmail && user.password == inputValuePassword
        );
      })
    ) {
      navigate("/sucess");
      console.log(users);
    }
  };
  const { darkMode } = useContext(ContextTheme);
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
            handleChange={generateInputChangeHandler(setInputValuePassword)}
          />
          <input
            onClick={toogleShowPassword}
            id="showPawword"
            type="checkbox"
          />
          <label htmlFor="showPassword">Показать пароль</label>
          <Button
            handleClick={validation}
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
