import { Input } from '../Input';
import { useState } from 'react';
import { Button } from '../Button';

export const RegistrationForm = () => {
    type FormInfo = {
        name: string;
        nameError: string;
        email: string;
        emailError: string;
        password: string;
        passwordError: string;
        confirmPassword: string;
        confirmPasswordError: string;
        validForm: boolean;
    }
    const [formInfo, setFormInfo] = useState<FormInfo>(
        {
            name: '',
            nameError: '',
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            confirmPassword: '',
            confirmPasswordError: '',
            validForm: true
        });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormInfo({ ...formInfo, [name]: value });
    };

    const validateAndSendUserInfo = () => {
        setFormInfo({ ...formInfo, ["nameError"]: '' });
        setFormInfo({ ...formInfo, ["emailError"]: '' });
        setFormInfo({ ...formInfo, ["passwordError"]: '' });
        setFormInfo({ ...formInfo, ["confirmPasswordError"]: '' });

        if (formInfo.name.length === 0) {
            formInfo.validForm = false;
            setFormInfo({ ...formInfo, ["nameError"]: 'Необходимо заполнить поле Name.' });
        }
        if (formInfo.email.length === 0) {
            formInfo.validForm = false;
            setFormInfo({ ...formInfo, ["emailError"]: 'Необходимо заполнить поле E-mail.' });
        }
        if (formInfo.password.length === 0) {
            formInfo.validForm = false;
            setFormInfo({ ...formInfo, ["passwordError"]: 'Необходимо заполнить поле Password.' });
        }
        if (formInfo.confirmPassword.length === 0) {
            formInfo.validForm = false;
            setFormInfo({ ...formInfo, ["confirmPasswordError"]: 'Необходимо заполнить поле Confirm password.' });
        }
        if (formInfo.password !== formInfo.confirmPassword) {
            formInfo.validForm = false;
            setFormInfo({ ...formInfo, ["passwordError"]: 'Поля Password и Confirm password должны совпадать.' });
        }
        if (formInfo.validForm) {
            alert('Ураааааа...');
        }
    }
    return (
        <div>
            <Input id='input_1' inputType='text' labelName='Name' name='name' value={formInfo.name} onChange={handleInputChange} placeHolder='Your name' errorInfo={formInfo.nameError} />
            <Input id='input_2' inputType='email' labelName='E-mail' name='email' value={formInfo.email} onChange={handleInputChange} placeHolder='Your e-mail' errorInfo={formInfo.emailError} />
            <Input id='input_3' inputType='password' labelName='Password' name='password' value={formInfo.password} onChange={handleInputChange} placeHolder='Your password' errorInfo={formInfo.passwordError} />
            <Input id='input_4' inputType='password' labelName='Confirm password' name='confirmPassword' value={formInfo.confirmPassword} onChange={handleInputChange} placeHolder='Confirm password' errorInfo={formInfo.confirmPasswordError} />
            <Button mode='primary' content='Sign In' onClick={validateAndSendUserInfo} />
        </div>
    )
}