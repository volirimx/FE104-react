import { useState } from 'react'
import { Button } from '../../components/UI/Button/Button'
import { Input } from '../../components/UI/Input/Input'
import styles from './signUp.module.css'
import { useAppDispatch } from '../../redux/hooks'
import { registerUser } from '../../redux/user/user'

export const SignUp = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const dispatch = useAppDispatch();


   return (
      <div className={styles.container}>
         <form className={styles.form}>
            <Input 
            title='Name' 
            placeholder='Your name' 
            className={styles.input} 
            type='name'
            onChange={(e) => setName(e.target.value)}
            />

            <Input 
            title='Email'
            placeholder='Your email'
            className={styles.input}
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            />
            
            <Input 
            title='Password'
            placeholder='Your password'
            className={styles.input}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            />
            
            <Input
            title='Confirm Password'
            placeholder='Confirm Password' 
            className={styles.input} 
            type='password' 
            onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button 
            name='Sign Up' 
            mode='primary' 
            className={styles.button}
            onClick={(e) => {
               e.preventDefault();
               if (!checkPasswordsEquality(password,confirmPassword)) {
                  console.log(`Name: ${name}`);
                  console.log(`Email: ${email}`);
                  console.log(`Password: ${password}`);
                  console.log(`Confirm password: ${confirmPassword}`);
               };
               dispatch(registerUser({
                  username: name,
                  email: email,
                  password: password
               }))
            }}
            />
            <span className={styles.text}>Already have an account? <a href="#" className={styles.redirection}>Sign In</a> </span>
         </form>
      </div>
   )
}

const checkPasswordsEquality = (password: string , confirmPassword: string) => {
   if (password === confirmPassword) {
      return true;
   };
   return false; 
}