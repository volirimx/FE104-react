import { Input } from '../../components/Input';
import { useState } from 'react';
import { Button } from '../../components/Button';
import { useNavigate, Link } from 'react-router-dom';
import styles from './index.module.css';

export const SignInPage = () => {
    type InputInfo = {
        value: string;
        isValid: boolean;
    }
    const navigate = useNavigate();
    const [emailInfo, setEmailInfo] = useState<InputInfo>({ value: '', isValid: true });
    const handleInputEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInfo((oldValue) => ({ ...oldValue, value: e.target.value, isValid: true }));
    }
    const [passwordInfo, setPasswordInfo] = useState<InputInfo>({ value: '', isValid: true });
    const handleInputPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordInfo((oldValue) => ({ ...oldValue, value: e.target.value, isValid: true }));
    }

    const SignInClick = () => {
        const userInfo = localStorage.getItem('CurrentUser');
        if (!userInfo) {
            setEmailInfo((oldValue) => ({ ...oldValue, isValid: false }));
            setPasswordInfo((oldValue) => ({ ...oldValue, isValid: false }));
            return;
        }
        const userInfoObj = JSON.parse(userInfo);
        if (userInfoObj.email !== emailInfo.value) {
            setEmailInfo((oldValue) => ({ ...oldValue, isValid: false }));
            return;
        }
        if (userInfoObj.password !== passwordInfo.value) {
            setPasswordInfo((oldValue) => ({ ...oldValue, isValid: false }));
            return;
        }
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