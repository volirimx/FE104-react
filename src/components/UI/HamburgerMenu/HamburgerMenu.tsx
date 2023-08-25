import styles from './hamburgerMenu.module.css'
import Hamburger from 'hamburger-react'
import { User } from '../User/User'

interface Hamburger {
  className: string;
}

export const HamburgerMenu = (props: any) => {
   const { burgerState, setBurgerState } = props; 
 
   return (
     <div className={`${styles.container} ${props.className}`}>
       <div
         className={styles.burger}
         onClick={() => {
           burgerState ? setBurgerState(false) : setBurgerState(true);
         }}
       >
         <Hamburger color='#FFF'></Hamburger>
       </div>
       {burgerState ? <User userName='Oleg Aboba' className={styles.user} /> : null}
     </div>
   );
 };