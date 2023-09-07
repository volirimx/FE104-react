import Button from "../../components/Button/Button";
import { useRef, useState } from "react";
import styles from "./registartion.module.css";
import Input from "../../components/Input/Input";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { thunkSendRequest } from "../../redux/users";
import { generateInputChangeHandler } from "../../utils/utils";

const Registration = () => {
  const [show, setShowPassword] = useState<boolean>(false);
  const [inputValueName, setInputValueName] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValuePassword, setInputValuePassword] = useState("");
  const [inputValueConfirmPassword, setInputValueConfirmPassword] =
    useState("");
  const toogleShowPassword = () => {
    setShowPassword(!show);
  };

  const inputPassRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  return (
    <div className={styles.wrapper}>
      <div className={styles.back}>
        <Link className={styles.back__button} to="/">
          Back to Home
        </Link>
      </div>

      <h1>Sign Up</h1>

      <div className={styles.form}>
        <div className={styles.form__content}>
          <Input
            value={inputValueName}
            placeholder="Name"
            handleChange={generateInputChangeHandler(setInputValueName)}
            height="30px"
            title="Name"
            id="name"
            border="1px black solid"
          />
          <Input
            ref={inputEmailRef}
            value={inputValueEmail}
            placeholder="Email"
            handleChange={generateInputChangeHandler(setInputValueEmail)}
            height="30px"
            title="Email"
            id="email"
            border="1px solid black"
          />
          <Input
            value={inputValuePassword}
            placeholder="Password"
            handleChange={generateInputChangeHandler(setInputValuePassword)}
            height="30px"
            border="1px solid black"
            title="Password"
            id="password"
            type={show ? "text" : "password"}
          />
          <Input
            ref={inputPassRef}
            value={inputValueConfirmPassword}
            placeholder="Confirm password"
            height="30px"
            title="Confirm Password"
            id="confirm_password"
            type={show ? "text" : "password"}
            border="1px solid black"
            handleChange={generateInputChangeHandler(
              setInputValueConfirmPassword
            )}
          />
          <input
            onClick={toogleShowPassword}
            id="showPassword"
            type="checkbox"
          />
          <label htmlFor="showPassword">Показать пароль</label>
          <Button
            title="Sign Up"
            mode="primary"
            disabled={false}
            handleClick={() => {
              dispatch(
                thunkSendRequest({
                  username: inputValueName,
                  email: inputValueEmail,
                  password: inputValuePassword,
                })
              );
            }}
          />
          <p>
            Already have an account? <a href="#!">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
