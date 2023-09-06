import { useState } from 'react'
import { Button } from '../../components/UI/Button/Button'
import { Input } from '../../components/UI/Input/Input'
import styles from './signUp.module.css'
import { useAppDispatch } from '../../redux/hooks'
import { registrateUser } from '../../redux/user/user'
import { checkPasswordsEquality } from '../../utils/checkPasswordsEquality'
import { useNavigate } from 'react-router-dom'


export const SignUp = () => {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const dispatch = useAppDispatch();
   const navigate = useNavigate();

   const input = <Input className='w-[80%] h-[50px] mt-[40px]' />

   return (
      <div className='flex flex-col mb-[70px]'>
         <form className='w-[500px] flex flex-col justify-center items-center border-[2px] border-[gainsboro] self-center'>
            {/* <Input 
            title='Name' 
            placeholder='Your name' 
            className='w-[80%] h-[50px] mt-[40px]' 
            type='name'
            onChange={(e) => setUsername(e.target.value)}
            /> */}

            {input}

            <Input 
            title='Email'
            placeholder='Your email'
            className='w-[80%] h-[50px] mt-[40px]'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            />
            
            <Input 
            title='Password'
            placeholder='Your password'
            className='w-[80%] h-[50px] mt-[40px]'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            />
            
            <Input
            title='Confirm Password'
            placeholder='Confirm Password' 
            className='w-[80%] h-[50px] mt-[40px]'
            type='password' 
            onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button 
            name='Sign Up' 
            mode='primary' 
            className='w-[80%] mb-[40px ]mt-[50px]'
            onClick={(e) => {
               e.preventDefault();
               if (checkPasswordsEquality(password,confirmPassword)) {
                  console.log(`Name: ${username}`);
                  console.log(`Email: ${email}`);
                  console.log(`Password: ${password}`);
                  console.log(`Confirm password: ${confirmPassword}`);
                  
                  dispatch(registrateUser({
                     username, email, password
                  }));
                  navigate('/registrationconfirmation')
               } else {
                  alert("Password and Confirm Password does't match. Check them please!")
               }
            }}
            />
            <span className='text-[gray] mb-[10px]'>Already have an account? <a onClick={() => {navigate('/signin')}} className='text-[14px] font-bold text-[blue]'>Sign In</a> </span>
         </form>
      </div>
   )
}