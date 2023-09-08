import { Title } from "../../components/Title";
import { CustomInput } from "../../components/Input";
import { useState } from "react";
import { Button } from "../../components/Button";
import styles from "./signin.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from "../../redux/hooks";
//import { saveAccessTokenToStore } from "../../redux/accessToken/accessToken";
import { saveTokensToStore } from "../../redux/tokens/tokens";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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

  // interface SignInData{
  //   email: string;
  //   password: string;
  // }
  const userData = {
    email: inputEmailValue.value,
    password: inputPasswordValue.value,
  };

  const handleDispatchClick = () => {
    dispatch(saveTokensToStore(userData));
  }; 

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
                      handleDispatchClick();
                      navigate("/successsignin")
                    }}
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