import { useState } from "react"
import { Input } from "../Input";

export function Form() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleChange = (e: any) => {
        const {value} = e.target;
        setEmail(value);
        setEmailError(validateEmail(value));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    const validateEmail = (value: string) => {
        if(!value) {
            return 'Введите email';
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(value)) {
            return 'Неправильный формат email';
        }
        return '';
    }

    return <form onSubmit={handleSubmit}>
        <Input value={email} onChange={handleChange} error={emailError} disabled={false} type="email" placeholder="placeholder"></Input>
    </form>;
}