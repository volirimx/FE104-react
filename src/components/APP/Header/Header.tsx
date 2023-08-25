import styles from './header.module.css'

import { useState } from 'react'
import { HamburgerMenu } from '../../UI/HamburgerMenu/HamburgerMenu'
import { Input } from '../../UI/Input/Input'
import { Magnifier } from '../../UI/Magnifier/Magnifier'
import { User } from '../../UI/User/User'

export const Header = (props: any) => {
   const [burgerState, setBurgerState] = useState(false); // Lift the state up to Header.
 
   return (
     <div className={styles.header}>
       <HamburgerMenu
         className={styles.hamburger}
         burgerState={burgerState}
         setBurgerState={setBurgerState}
       />
       {burgerState ? (
         <div className={styles.plug}></div>
       ) : <Input type='text' placeholder='Search...' className={styles.searchInput} />
       }
       <div className={styles.wrapper}>
         <Magnifier className={styles.magnifier} />
         <User userName='Oleg Aboba' className={styles.user} />
       </div>
     </div>
   );
 };