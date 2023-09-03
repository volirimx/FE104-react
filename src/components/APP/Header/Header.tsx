import styles from './header.module.css'

import { useState } from 'react'
import { HamburgerMenu } from '../../UI/HamburgerMenu/HamburgerMenu'
import { Input } from '../../UI/Input/Input'
import { Magnifier } from '../../UI/Magnifier/Magnifier'
import { User } from '../../UI/User/User'

export const Header = (props: any) => {
  const [searchState, setSearchState] = useState(false);

   return (
     <div className='flex w-[99%] m-auto mt-[5px]'>
       <HamburgerMenu
        //  burgerState={burgerState}
        //  setBurgerState={setBurgerState}
       />

      {searchState ? 
      <div className='min-w-[500px] h-[70px] flex-auto'>
        <Input 
        type='text' 
        placeholder='Search...' 
        className='min-w-[500px] h-[70px] flex-auto text-[white] text-[18px] bg-[#5463ca] placeholder:text-[white]' 
        />
      </div>
        
      :
      <div className='min-w-[500px] h-[70px] flex-auto bg-[#2436a7]'></div>
      }
       
       <div className='flex justify-end'>
        <div 
          className='border-x-[1px]'
          onClick={() => {setSearchState((prev) => !prev)}}  
        >
          <Magnifier className='bg-[#2436a7] cursor-pointer' />
        </div>
         <User userName='Oleg Aboba' />
       </div>
     </div>
   );
 };