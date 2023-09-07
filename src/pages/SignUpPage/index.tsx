import { Title } from "../../components/Title"
import { CustomInput } from "../../components/Input"
import { useState } from "react"
import { Button } from "../../components/Button"
import styles from "./signup.module.css"
import { useAppDispatch } from "../../redux/hooks"
import { registerUser } from "../../redux/user/user"
import { useNavigate } from "react-router-dom"

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [inputTextValue, setInputTextValue] = useState({value: '', isValid: true});
  const [inputEmailValue, setInputEmailValue] = useState({value: '', isValid: true});
  const [inputPasswordValue, setPasswordInputValue] = useState({value: '', isValid: true}); 
  const [inputConfirmPasswordValue, setConfirmPasswordInputValue] = useState({value: '', isValid: true}); 

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTextValue((oldValue) => ({...oldValue, value: e.target.value}));
  }
  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmailValue((oldValue) => ({...oldValue, value: e.target.value}));
  }
  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInputValue((oldValue) => ({...oldValue, value: e.target.value}));
  }
  const handleConfirmPasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPasswordInputValue((oldValue) => ({...oldValue, value: e.target.value}));
  }

  const textValidator = () => {
    if (inputTextValue.value.length <= 10) {
      setInputTextValue((oldValue) => ({ ...oldValue, isValid: true }));
    } else {
      setInputTextValue((oldValue) => ({ ...oldValue, isValid: false }));
    }
  }    
  const emailValidator = () => {
    if (inputEmailValue.value.includes("@") && inputEmailValue.value.includes(".")) {
      setInputEmailValue((oldValue) => ({ ...oldValue, isValid: true }));
    } else {
      setInputEmailValue((oldValue) => ({ ...oldValue, isValid: false }));
    }
  } 
  const passwordValidator = () => {
    if (inputPasswordValue.value.length <= 10) {
      setPasswordInputValue((oldValue) => ({ ...oldValue, isValid: true }));
    } else {
      setPasswordInputValue((oldValue) => ({ ...oldValue, isValid: false }));
    }
  }
  const confirmPasswordValidator = () => {
    if (inputConfirmPasswordValue.value === inputPasswordValue.value) {
        setConfirmPasswordInputValue((oldValue) => ({ ...oldValue, isValid: true }));
    } else {
        setConfirmPasswordInputValue((oldValue) => ({ ...oldValue, isValid: false }));
    }
  }
  const validateInputs = () => {
    textValidator(); 
    emailValidator(); 
    passwordValidator(); 
    confirmPasswordValidator();
  }

  const handleDispatchClick = () => {
    dispatch(
      registerUser({
        email: inputEmailValue.value,
        password: inputPasswordValue.value,
        username: inputTextValue.value,
      })
    );
    console.log(inputEmailValue);
  };  

  const handleNavigate = () => {
    navigate(`/registrationconfirmation`)
  }
    return(
        <div>
            <Title titleText="Sign Up"/>
            <div className={styles.input}>
                <CustomInput value={inputTextValue.value} onChange={handleTextInputChange} isValid={inputTextValue.isValid} inputTitle="Name"  placeholder='Your name' inputMode="text" disabled={false} inputType="text" errorText="Введите коррекное имя"/> 
                <CustomInput value={inputEmailValue.value} onChange={handleEmailInputChange} isValid={inputEmailValue.isValid} inputTitle="Email"  placeholder='Your email' inputMode="text" disabled={false} inputType="email" errorText="Введите коррекный адрес электронной почты"/> 
                <CustomInput value={inputPasswordValue.value} onChange={handlePasswordInputChange} isValid={inputPasswordValue.isValid} inputTitle="Password"  placeholder='Your password' inputMode="text" disabled={false} inputType="password" errorText="Введите коррекный пароль"/> 
                <CustomInput value={inputConfirmPasswordValue.value} onChange={handleConfirmPasswordInputChange} isValid={inputConfirmPasswordValue.isValid} inputTitle="Confirm password"  placeholder='Confirm password' inputMode="text" disabled={false} inputType="password" errorText="Ваши пароли не совпадают"/> 
                <Button mode="primary"  name="Sign Up" onClick={() => {validateInputs(); handleDispatchClick(), handleNavigate()}}/>
            </div>
        </div>
    ) 
}

// export { inputEmailValue };
