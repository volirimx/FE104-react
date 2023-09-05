import styles from './signIn.module.css'
import { useState } from 'react'

import { Input } from '../../components/UI/Input/Input'
import { Button } from '../../components/UI/Button/Button'

export const SignIn = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');   
   
   return (
      <div className={styles.container}>
         <form className={styles.form}>
            <Input 
            title='Email'
            placeholder='Your email' 
            className={styles.input} 
            type='email' 
            onChange ={(e) => {setEmail(e.target.value)}} 
            />
            <Input 
            title='Password' 
            placeholder='Your password' 
            className={styles.input} 
            type='password'
            onChange={(e) => {setPassword(e.target.value)}} 
            />
            <a href="#" className={styles.forgot}>Forgot Password?</a>
            <Button 
            name='Sign In' 
            mode='primary' 
            className={styles.button} 
            onClick={() => {
               console.log(email); console.log(password)
            }}
            />
            <span className={styles.text}>Don't have an account? <a href="#" className={styles.redirection}>Sign Up</a></span>
         </form>
      </div>
   );
};
