import { Title } from "../../components/Title";
import { CustomInput } from "../../components/Input";
import { useState } from "react";
import { Button } from "../../components/Button";
import styles from "./signin.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from "../../redux/hooks";
//import { saveAccessTokenToStore } from "../../redux/accessToken/accessToken";
import { saveTokens} from "../../redux/tokens/tokens";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [inputEmailValue, setInputEmailValue] = useState({value: '', isValid: true});
  const [inputPasswordValue, setPasswordInputValue] = useState({value: '', isValid: true}); 
  
  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmailValue((oldValue) => ({...oldValue, value: e.target.value}));
  }
  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue((oldValue) => ({...oldValue, value: e.target.value}));
  }

  const emailValidator = () => {
    if (inputEmailValue.value.includes("@") && inputEmailValue.value.includes(".")) {
        setInputEmailValue((oldValue) => ({ ...oldValue, isValid: true }));
      return true;
    } else {
        setInputEmailValue((oldValue) => ({ ...oldValue, isValid: false }));
      return false;
    }
  } 
  const passwordValidator = () => {
    if (inputPasswordValue.value.length <= 10) {
        setPasswordInputValue((oldValue) => ({ ...oldValue, isValid: true }));
      return true;
    } else {
        setPasswordInputValue((oldValue) => ({ ...oldValue, isValid: false }));
      return false;
    }
  }
  
  const signInValidator = () => {
    // console.log(emailValidator());
    // console.log(passwordValidator());
    emailValidator();
    passwordValidator();
    return inputEmailValue.isValid && inputPasswordValue.isValid;
  }

  const userData = {
    email: inputEmailValue.value,
    password: inputPasswordValue.value,
  };

  const handleDispatchClick = () => {
    dispatch(saveTokens(userData))
      .then(response => {
        if (response.payload.status !== 400) {
          navigate("/successsignin");
        }
      });
  };

  return(
    <div>
      <Title titleText="Sign In"/>
        <div className={styles.form_container}>
          <CustomInput value={inputEmailValue.value} onChange={handleEmailInputChange} isValid={inputEmailValue.isValid} inputTitle="Email"  placeholder='Your email' inputMode="text" disabled={false} inputType="email" errorText="Введите коррекный адрес электронной почты"/> 
          <CustomInput value={inputPasswordValue.value} onChange={handlePasswordInputChange} isValid={inputPasswordValue.isValid} inputTitle="Password"  placeholder='Your password' inputMode="text" disabled={false} inputType="password" errorText="Вы ввели не верный пароль"/>
            <div style={{ marginTop: "40px" }}>
              <Button mode="primary" 
                      name="Sign In" 
                      onClick={() => { 
                      signInValidator() ? handleDispatchClick() : null;
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