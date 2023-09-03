
import Hamburger from 'hamburger-react'
import { User } from '../User/User'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Theme } from '../../APP/Theme/Theme';
import { useAppSelector } from '../../../redux/hooks';
import { selectTheme } from '../../../redux/theme/theme';

interface Hamburger {
  className: string;
}

export const HamburgerMenu = (props: any) => {
  const [ burgerState, setBurgerState ] = useState(false); 
  const navigate = useNavigate();
  const theme = useAppSelector(selectTheme);
 
  return (
    <div>
      <div
      className='w-[70px] h-[70px] bg-[#2436a7] border-r-[1px] flex justify-center items-center cursor-pointer relative'
      onClick={() => {
        burgerState ? setBurgerState(false) : setBurgerState(true);
      }}
    >
      <Hamburger color='#FFF' toggled={burgerState} />
    </div>      
    {burgerState ? 
      <div className={`absolute z-10 ${theme.mode === 'light' ? 'bg-[white]' : 'bg-[black]'}`}>
        <User userName='Oleg Grishan' className='border-t-[1px]' />
        <div 
          className={`h-[70px] text-[20px] border-b-[1px] flex justify-center items-center cursor-pointer hover:text-[#2436a7] ${theme.mode === 'dark' ? 'text-[white]' : 'text-[black]'}`}
          onClick={() => {
            navigate('/');
            setBurgerState(false)
         }}
        >
          Home
        </div>
        
        <div 
          className={`h-[70px] text-[20px] border-b-[1px] flex justify-center items-center cursor-pointer hover:text-[#2436a7] ${theme.mode === 'dark' ? 'text-[white]' : 'text-[black]'}`}
          onClick={() => {
            navigate('/posts');
            setBurgerState(false)
         }}
        >
          Add Post
        </div>
        
        <Theme />

        <div className='h-[70px] flex justify-center items-center bg-[gray] text-[white] cursor-pointer'>
            Log Out
        </div>
      </div>
    : null}
    </div>
  );
};