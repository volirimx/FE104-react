import { Title } from "../Title";
import { CustomInput } from "../Input";
import { useState } from "react";
import { Button } from "../Button";
import styles from "./signin.module.css";
import { Link, useNavigate } from 'react-router-dom';
export const SignIn = () => {
  const navigate = useNavigate();
  const [inputEmailValue, setInputEmailValue] = useState({value: '', isValid: true});
  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmailValue((oldValue) => ({...oldValue, value: e.target.value}));
  }
  const emailValidator = () => {
    if (inputEmailValue.value.includes("@") && inputEmailValue.value.includes(".")) {
      setInputEmailValue((oldValue) => ({ ...oldValue, isValid: true }));
    } else {
      setInputEmailValue((oldValue) => ({ ...oldValue, isValid: false }));
    }
  }
  console.log(inputEmailValue);
 

  const [inputPasswordValue, setPasswordInputValue] = useState({value: '', isValid: true}); 
  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue((oldValue) => ({...oldValue, value: e.target.value}));
  }
  const passwordValidator = () => {
    if (inputPasswordValue.value.length <= 5) {
      setPasswordInputValue((oldValue) => ({ ...oldValue, isValid: true }));
    } else {
      setPasswordInputValue((oldValue) => ({ ...oldValue, isValid: false }));
    }
  }
  console.log(inputPasswordValue); 

    return(
        <div>
            <Title titleText="Sign In"/>
            <div className={styles.form_container}>
                <CustomInput value={inputEmailValue.value} onChange={handleEmailInputChange} isValid={inputEmailValue.isValid} inputTitle="Email"  placeholder='Your email' inputMode="text" disabled={false} inputType="email" errorText="Введите коррекный адрес эдектронной почты"/> 
                <CustomInput value={inputPasswordValue.value} onChange={handlePasswordInputChange} isValid={inputPasswordValue.isValid} inputTitle="Password"  placeholder='Your password' inputMode="text" disabled={false} inputType="password" errorText="Вы ввели не верный пароль"/>
                <div style={{ marginTop: "40px" }}>
                    <Button mode="primary" 
                     name="Sign In" 
                     onClick={() => {
                    emailValidator();
                    passwordValidator();
                     // Проверка на валидность и перенаправление
                    (inputEmailValue.isValid && inputPasswordValue.isValid) ? navigate("/successsignin") : ""}}
                    />
                </div>
                <div className={styles.text}>
                    <div><h4>Don't have an account?</h4></div>
                    <div><Link to="/signup"><a>Sign Up</a></Link></div>                    
                </div>
            </div>
        </div>
    )
}