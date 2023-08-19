import React, { useState, ChangeEvent, FormEvent, useContext } from 'react';
import styles from './signin.module.css';
import { UserTheme } from '../Theme/thems';

interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
interface ForDataProps {
  thems?: string
}

export const Form = (props: ForDataProps ) => {
    const [formData, setFormData] = useState<FormData>({
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
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(formData.password)) {
      alert(
        'Пароль должен содержать как минимум 8 символов, включая как минимум одну строчную и одну заглавную букву, одну цифру и один специальный символ (@, $, !, %, *, ?, &).'
      );
      return;
    }
  
    // Если все проверки прошли успешно, можно отправить данные формы
    console.log(formData);
  };
  

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
      <button type="submit" className={styles.form__button}>
        Sign up
      </button>
    </form>
  );
};

