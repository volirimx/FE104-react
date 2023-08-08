import { useState } from "react"
import styles from "./index.module.css"
import { UserName } from "../User/User.tsx"




export const BurgerMenu = () => {
 const [isOpen, setIsOpen] = useState(false);

 const handleOpenMenu = () => {
  setIsOpen(!isOpen)
 }

 return (
  <>
   <div className={styles.wrap} onClick={handleOpenMenu}>
    {!isOpen ?
     <div>
      <div className={styles.wrap_line}></div>
      <div className={styles.wrap_line}></div>
      <div className={styles.wrap_line}></div>
     </div>
     :
     <div>
      <div className={styles.wrap_line_close}></div>
      <div className={styles.wrap_line_close3}></div>
      <div className={styles.wrap_line_close2}></div>
     </div>
    }
   </div>
   {isOpen ? <UserName user="Aleksey Pozniak" /> : null}
  </>
 )
}
