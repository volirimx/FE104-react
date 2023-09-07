import { Input } from '../../components/Input';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { useNavigate, Link } from 'react-router-dom';
import styles from './index.module.css';
import axios from 'axios';

type InputInfo = {
    value: string;
    isValid: boolean;
}
type UserData = {
    email: string;
    password: string;
}

export const SignInPage = () => {
    
    const navigate = useNavigate();
    const [emailInfo, setEmailInfo] = useState<InputInfo>({ value: '', isValid: true });
    const [passwordInfo, setPasswordInfo] = useState<InputInfo>({ value: '', isValid: true });

    const handleInputEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInfo((oldValue) => ({ ...oldValue, value: e.target.value, isValid: true }));
    }    
    const handleInputPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordInfo((oldValue) => ({ ...oldValue, value: e.target.value, isValid: true }));
    }  
    const getTokenRequest = async(userData: UserData) => {
        const response = await axios.post('https://studapi.teachmeskills.by/auth/jwt/create/',
            userData);
            console.log(response);
    }
    const SignInClick = () => {
        getTokenRequest({email: emailInfo.value, password: passwordInfo.value});
        navigate('/');
    }
    return (
        <div className={styles.signInContainer}>
            <div className={styles.headers}>
                <Link to='/'><h5>Back to home</h5></Link>
                <h2>Sign In</h2>
            </div>
            <div className={styles.container}>
                <Input id='input_5' inputType='email' labelName='E-mail' name='email' value={emailInfo.value} onChange={handleInputEmailChange} placeHolder='Your e-mail' errorInfo={'Некорректно заполнено поле e-mail.'} isValid={emailInfo.isValid} />
                <Input id='input_6' inputType='password' labelName='Password' name='password' value={passwordInfo.value} onChange={handleInputPasswordChange} placeHolder='Your password' errorInfo={'Некорректно заполнено поле password.'} isValid={passwordInfo.isValid} />
                <p>Forgot password?</p>
                <Button mode='primary' content='Sign In' onClick={SignInClick} />
            </div>
        </div>
    )
}