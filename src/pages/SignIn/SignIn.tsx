import styles from './signIn.module.css'
import { useState } from 'react'

import { Input } from '../../components/UI/Input/Input'
import { Button } from '../../components/UI/Button/Button'
import { loginUser } from '../../redux/user/user';
import { useAppDispatch } from '../../redux/hooks';

export const SignIn = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');   
   const dispatch = useAppDispatch();
   
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
            onClick={(e) => {
               e.preventDefault();
               
               dispatch(
                  loginUser({
                     onSuccess: (data) => {
                        const { access, refresh } = data;
                        console.log(access, refresh);
                        localStorage.setItem('refreshToken', refresh)
                     },
                     data: {email, password},
                  }));
            }}
            />
            <span className={styles.text}>Don't have an account? <a href="#" className={styles.redirection}>Sign Up</a></span>
         </form>
      </div>
   );
};

// useEffect(() => {
//    dispatch(
//    getPostById({
//       onSuccess: (data) => {
//          setPost(data);
//       },
//       id: postId,
//    }));
// }, [postId]);