import React, { useState, ChangeEvent, FormEvent, useContext } from 'react';
import styles from './signin.module.css';
import { UserTheme } from '../Theme/thems';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from "..//../hooks/useAuth";


export interface UserFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
interface ForDataProps {
  thems?: string
}

export const Form = (props: ForDataProps ) => {
    const [formData, setFormData] = useState<UserFormData>({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

  const myThem = useContext(UserTheme);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;     
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
        // Валидация формы
    if (formData.password !== formData.confirmPassword) {
      alert('Пароли не совпадают');
      return;

    }
  
    // Проверка сложности пароля (можно настраивать по желанию)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{3,}$/;
    if (!passwordPattern.test(formData.password)) {
      alert(
        'Пароль должен содержать как минимум 3 символа, включая как минимум одну строчную и одну заглавную букву и одну цифру'
      );
      return;
    } 
    const form = e.target;
    const user = formData;
    signin(user, () => navigate(fromPage))
    
  };
  
    const navigate = useNavigate();
    const goToSuccess = () => navigate('/success')
    const location = useLocation();
    const { signin } = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

  return (
    <form className={`${styles.form} ${styles[myThem]}`} onSubmit={handleSubmit}>
      <div className={styles.form__group}>
        <label htmlFor="name" className={styles.form__label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.form__input}
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="email" className={styles.form__label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.form__input}
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="password" className={styles.form__label}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className={styles.form__input}
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="confirmPassword" className={styles.form__label}>
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className={styles.form__input}
        />
      </div>
      <button type="submit" className={styles.form__button} onClick={goToSuccess}>
        Sign up
      </button>
    </form>
  );
};
