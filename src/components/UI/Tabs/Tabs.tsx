import { useState } from 'react';
import styles from './Tabs.module.css'

interface Tabs {
   disabledFirst?: boolean;
   disabledSecond?: boolean;
   disabledThird?: boolean;
   firstName: string;
   secondName: string;
   thirdName: string;
   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
   changeTab: (firstName: string) => void; 
}

export const Tabs = ({disabledFirst, disabledSecond, disabledThird, firstName, secondName, thirdName, onClick, changeTab}: Tabs) => {

   return (
      <div className={styles.container}>
         <button 
         className={styles.tab} 
         disabled={disabledFirst}
         onClick={() => changeTab(firstName)}
         >
            {firstName}
         </button>
         
         <button 
         className={styles.tab} 
         disabled={disabledSecond}
         onClick={() => changeTab(secondName)}       
         >
            {secondName}
         </button>

         <button 
         className={styles.tab} 
         disabled={disabledThird}
         onClick={() => changeTab(thirdName)}
         >
            {thirdName}
         </button>
      </div>
   )
}