import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from "./index.module.css"

interface LoginFormState {
 login: string;
 password: string;
}

export const LoginForm: React.FC = () => {
 const [formDate, setFormDate] = useState<LoginFormState>({
  login: "",
  password: ""
 })

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormDate((mem) => ({
   ...mem,
   [name]: value
  }));
  console.log(name, value);

 }
 const handleButton = (event: React.FormEvent) => {
  event.preventDefault()
  console.log('Логин:', formDate.login);
  console.log('Пароль:', formDate.password);
  setFormDate({
   login: "",
   password: ""
  })
 }

 return (
  <>
   <form onSubmit={handleButton}>
    <div>
     <label>Логин:</label>
     <input
      type="text"
      name="login"
      value={formDate.login}
      onChange={handleInputChange}
     />
    </div>
    <div>
     <label>Пароль:</label>
     <input
      type="password"
      name="password"
      value={formDate.password}
      onChange={handleInputChange}
     />
    </div>
    <button type="submit">Войти</button>
   </form>
  </>
 )
}



