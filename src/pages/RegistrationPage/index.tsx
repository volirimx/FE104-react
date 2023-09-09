import { Input } from '../../components/Input';
import { useState } from 'react';
import { Button } from '../../components/Button';
import styles from './index.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from "../../redux/hooks";
import { registerUser } from "../../redux/user/user";

type InputInfo = {
    value: string;
    isValid: boolean;
} 
export const RegistrationPage = () => {   
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [nameInfo, setNameInfo] = useState<InputInfo>({ value: '', isValid: true });
    const [emailInfo, setEmailInfo] = useState<InputInfo>({ value: '', isValid: true });
    const [passwordInfo, setPasswordInfo] = useState<InputInfo>({ value: '', isValid: true });
    const [passwordConfirmInfo, setPasswordConfirmInfo] = useState<InputInfo>({ value: '', isValid: true });
    
    const handleInputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInfo((oldValue) => ({ ...oldValue, value: e.target.value, isValid: true }));
    }
    const nameInputValidator = () => {
        if (nameInfo.value.length === 0) {
            setNameInfo((oldValue) => ({ ...oldValue, isValid: false }));
        } else {
            setNameInfo((oldValue) => ({ ...oldValue, isValid: true }));
        }
    }   
    const handleInputEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInfo((oldValue) => ({ ...oldValue, value: e.target.value, isValid: true }));
    }
    const emailInputValidator = () => {
        if (emailInfo.value.length === 0 || !emailInfo.value.includes("@")) {
            setEmailInfo((oldValue) => ({ ...oldValue, isValid: false }));
        } else {
            setEmailInfo((oldValue) => ({ ...oldValue, isValid: true }));
        }
    }   
    const handleInputPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordInfo((oldValue) => ({ ...oldValue, value: e.target.value, isValid: true }));
    }
    const passwordInputValidator = () => {
        if (passwordInfo.value.length <= 5 || passwordInfo.value.length >= 20) {
            setPasswordInfo((oldValue) => ({ ...oldValue, isValid: false }));
        } else {
            setPasswordInfo((oldValue) => ({ ...oldValue, isValid: true }));
        }
    }
    const handleInputConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirmInfo((oldValue) => ({ ...oldValue, value: e.target.value, isValid: true }));
    }
    const passwordConfirmInputValidator = () => {
        if (passwordConfirmInfo.value !== passwordInfo.value) {
            setPasswordConfirmInfo((oldValue) => ({ ...oldValue, isValid: false }));
        } else {
            setPasswordConfirmInfo((oldValue) => ({ ...oldValue, isValid: true }));
        }
    }
    const redirectToConfirmation = () => {
        navigate('/confirmation');
    }
    const handleDispatchClick = () => {
        dispatch(
            registerUser({
            email: emailInfo.value,
            password: passwordInfo.value,
            username: nameInfo.value,
            })
        );
    }
    const validateAndSendUserInfo = () => {
        nameInputValidator();
        emailInputValidator();
        passwordInputValidator();
        passwordConfirmInputValidator();
        if (nameInfo.isValid && emailInfo.isValid && passwordInfo.isValid && passwordConfirmInfo.isValid && nameInfo.value.length > 0) {
           handleDispatchClick();
            redirectToConfirmation();
        }
    }

    return (
        <div className={styles.registrationContainer}>
            <div className={styles.headers}>
                <Link to='/'><h5>Back to home</h5></Link>
                <h2>Sign Up</h2>
            </div>
            <div className={styles.container}>
                <Input id='input_1' inputType='text' labelName='Name' name='name' value={nameInfo.value} onChange={handleInputNameChange} placeHolder='Your name' errorInfo={'Некорректно заполнено поле name.'} isValid={nameInfo.isValid} />
                <Input id='input_2' inputType='email' labelName='E-mail' name='email' value={emailInfo.value} onChange={handleInputEmailChange} placeHolder='Your e-mail' errorInfo={'Некорректно заполнено поле e-mail.'} isValid={emailInfo.isValid} />
                <Input id='input_3' inputType='password' labelName='Password' name='password' value={passwordInfo.value} onChange={handleInputPasswordChange} placeHolder='Your password' errorInfo={'Некорректно заполнено поле password.'} isValid={passwordInfo.isValid} />
                <Input id='input_4' inputType='password' labelName='Confirm password' name='confirmPassword' value={passwordConfirmInfo.value} onChange={handleInputConfirmPasswordChange} placeHolder='Confirm password' errorInfo={'Поля password и confirm password должны совпадать.'} isValid={passwordConfirmInfo.isValid} />
                <Button mode='primary' content='Sign In' onClick={validateAndSendUserInfo} />
                <p>Already here an account? <Link to='/signin'>Sign in</Link></p>
            </div >
        </div>

    )
}