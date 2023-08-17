import { Input } from '../Input';
import { useState } from 'react';
import { Button } from '../Button';

export const SignInForm = () => {
    type SignInForm = {
        email: string;
        password: string;
    }
    const [formInfo, setFormInfo] = useState<SignInForm>(
        {
            email: '',
            password: ''
        });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormInfo({ ...formInfo, [name]: value });
    };

    const SignInClick = () => { }
    return (
        <div>
            <Input id='input_5' inputType='email' labelName='E-mail' name='email' value={formInfo.email} onChange={handleInputChange} placeHolder='Your e-mail' errorInfo={formInfo.emailError} />
            <Input id='input_6' inputType='password' labelName='Password' name='password' value={formInfo.password} onChange={handleInputChange} placeHolder='Your password' errorInfo={formInfo.passwordError} />
            <Button mode='primary' content='Sign In' onClick={SignInClick} />
        </div>
    )
}