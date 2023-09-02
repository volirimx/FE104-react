
import Hamburger from 'hamburger-react'
import { User } from '../User/User'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

interface Hamburger {
  className: string;
}

export const HamburgerMenu = (props: any) => {
  const [ burgerState, setBurgerState ] = useState(false); 
  const navigate = useNavigate();
 
  return (
    <div className='absolute'>
      <div
      className='w-[70px] h-[70px] bg-[#2436a7] border-r-[1px] flex justify-center items-center cursor-pointer relative'
      onClick={() => {
        burgerState ? setBurgerState(false) : setBurgerState(true);
      }}
    >
      <Hamburger color='#FFF' toggled={burgerState} />
    </div>      
    {burgerState ? 
      <div className='bg-[white] absolute z-10'>
        <User userName='Oleg Grishan' className='border-t-[1px]' />
        <div 
          className='h-[70px] text-[20px] border-b-[1px] flex justify-center items-center cursor-pointer hover:text-[#2436a7]'
          onClick={() => {
            navigate('/');
            setBurgerState(false)
         }}
        >
          Home
        </div>
        
        <div 
          className='h-[70px] text-[20px] border-b-[1px] flex justify-center items-center cursor-pointer hover:text-[#2436a7]'
          onClick={() => {
            navigate('/posts');
            setBurgerState(false)
         }}
        >
          Add Post
        </div>
        
        <div className='mt-[140px] h-[70px] flex cursor-pointer border-t-[1px]'>
          <div className='w-[50%] flex justify-center items-center border-r-[1px]'><FontAwesomeIcon icon={faSun} /></div>
          <div className='w-[50%] flex justify-center items-center'><FontAwesomeIcon icon={faMoon} /></div>
        </div>

        <div className='h-[70px] flex justify-center items-center bg-[gray] text-[white] cursor-pointer'>
            Log Out
        </div>
      </div>
    : null}
    </div>
  );
};