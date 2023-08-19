import { Title } from "../Title"
import { CustomInput } from "../Input"
import { useState } from "react"
import styles from "./signup.styles.css"
import { Button } from "../Button"

export const SignUp = () => {
    const [inputTextValue, setInputTextValue] = useState({value: '', isValid: true});
    const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTextValue((oldValue) => ({...oldValue, value: e.target.value}));
    }
    const textValidator = () => {
      if (inputTextValue.value.includes("@") && inputTextValue.value.includes(".")) {
        setInputTextValue((oldValue) => ({ ...oldValue, isValid: true }));
      } else {
        setInputTextValue((oldValue) => ({ ...oldValue, isValid: false }));
      }
    }
    console.log(inputTextValue);
    
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

  const [inputConfirmPasswordValue, setConfirmPasswordInputValue] = useState({value: '', isValid: true}); 
  const handleConfirmPasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPasswordInputValue((oldValue) => ({...oldValue, value: e.target.value}));
  }
  const confirmPasswordValidator = () => {
    if (inputConfirmPasswordValue.value === inputPasswordValue.value) {
        setConfirmPasswordInputValue((oldValue) => ({ ...oldValue, isValid: true }));
    } else {
        setConfirmPasswordInputValue((oldValue) => ({ ...oldValue, isValid: false }));
    }
  }
  console.log(inputConfirmPasswordValue); 
    return(
        <div>
            <Title titleText="Sign Up"/>
            <div>
                <CustomInput value={inputTextValue.value} onChange={handleTextInputChange} isValid={inputTextValue.isValid} inputTitle="Name"  placeholder='Your name' inputMode="text" disabled={false} inputType="text" errorText="Введите коррекное имя"/> 
                <CustomInput value={inputEmailValue.value} onChange={handleEmailInputChange} isValid={inputEmailValue.isValid} inputTitle="Email"  placeholder='Your email' inputMode="text" disabled={false} inputType="email" errorText="Введите коррекный адрес эдектронной почты"/> 
                <CustomInput value={inputPasswordValue.value} onChange={handlePasswordInputChange} isValid={inputPasswordValue.isValid} inputTitle="Password"  placeholder='Your password' inputMode="text" disabled={false} inputType="password" errorText="Введите коррекный пароль"/> 
                <CustomInput value={inputConfirmPasswordValue.value} onChange={handleConfirmPasswordInputChange} isValid={inputConfirmPasswordValue.isValid} inputTitle="Confirm password"  placeholder='Confirm password' inputMode="text" disabled={false} inputType="password" errorText="Ваши пароли не совпадают"/> 
                <Button mode="primary"  name="Sign Up" onClick={() => {textValidator(); emailValidator(); passwordValidator(); confirmPasswordValidator}}/>
            </div>
        </div>
    )
}