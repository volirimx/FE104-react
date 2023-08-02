import styles from './hamburgerMenu.module.css'
import icon from '../../assets/images/burgerMenu.svg'
import cross from '../../assets/images/cross.svg'
import {useState} from 'react'
import { User } from '../User/User'

export const HamburgerMenu = () => {
   const [initState, clickedState] = useState(false);
   return (
      <>
         <div className={styles.container} onClick={() => {initState? clickedState(false) : clickedState(true) }}>
            <img src={icon} className={initState? styles.hidden : styles.icon} />
            <img src={cross} className={initState ? styles.cross : styles.hidden } />
         </div>
         {initState ? <User userName='Oleg Aboba' /> : null}   
      </>
   )
};