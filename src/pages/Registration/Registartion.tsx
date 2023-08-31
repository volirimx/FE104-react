import Button from "../../components/Button/Button";
import {
  ChangeEvent,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import styles from "./registartion.module.css";
import Input from "../../components/Input/Input";
import Users from "../../components/Users/Users";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Registration = () => {
  const [show, setShowPassword] = useState<boolean>(false);
  const toogleShowPassword = () => {
    setShowPassword(!show);
  };

  const navigate = useNavigate();

  const [inputValueName, setInputValueName] = useState("");
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValuePassword, setInputValuePassword] = useState("");
  const [inputValueConfirmPassword, setInputValueConfirmPassword] =
    useState("");

  const generateInputChangeHandler =
    (stateSetter: React.Dispatch<SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.target;
      stateSetter(target.value);
    };

  const inputPassRef = useRef<MutableRefObject<HTMLInputElement>>();
  const inputEmailRef = useRef<MutableRefObject<HTMLInputElement>>();
  // cоздать переменные булиан которые хранят тру или фолз в зависимости от того правильно ли введены данные в инпуты и сравнивает их с массивом юзеров
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
          />
          <Input
            ref={inputEmailRef}
            value={inputValueEmail}
            placeholder="Email"
            handleChange={generateInputChangeHandler(setInputValueEmail)}
            height="30px"
            title="Email"
            id="email"
            border={
              Users.some((user) => {
                return user.email == inputValueEmail;
              })
                ? "1px solid red"
                : "none"
            }
          />
          <Input
            value={inputValuePassword}
            placeholder="Password"
            handleChange={generateInputChangeHandler(setInputValuePassword)}
            height="30px"
            border={
              inputValueConfirmPassword == inputValuePassword
                ? "none"
                : "1px solid red"
            }
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
            border={
              inputValueConfirmPassword == inputValuePassword
                ? "none"
                : "1px solid red"
            }
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
              if (
                !Users.some((user) => {
                  return user.email == inputValueEmail;
                }) &&
                inputValueConfirmPassword == inputValuePassword
              ) {
                Users.push({
                  name: inputValueName,
                  email: inputValueEmail,
                  password: inputValuePassword,
                });
                localStorage.setItem("Users", JSON.stringify(Users));
                navigate("/Confirm");
              } else {
                if (inputValueConfirmPassword !== inputValuePassword) {
                  inputPassRef.current ? inputPassRef.current.focus() : null;
                }
                if (
                  Users.some((user) => {
                    return user.email == inputValueEmail;
                  })
                ) {
                  inputEmailRef.current.focus();
                }
              }
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
