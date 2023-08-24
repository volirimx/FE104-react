import { useState } from "react"
import { Input } from "../Input";

interface props {
    check?: any;
}

export function Form({check} : props) {
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
            check(false);
            return 'Введите email';
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(value)) {
            check(false);
            return 'Неправильный формат email';
        }
        check(true);
        return '';
    }

    return <form onSubmit={handleSubmit}>
        <Input value={email} onChange={handleChange} error={emailError} disabled={false} type="email" placeholder="placeholder"></Input>
    </form>;
}