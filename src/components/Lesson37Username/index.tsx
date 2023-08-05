
import styles from "./index.module.css"

interface User {
 firstName: string,
 lastName: string
}


const Username = (props: User) => {
 const { firstName, lastName } = props;
 return (
  <>
   <div className={styles.container}>
    <div className={styles.wrapper}>
     <div className={styles.wrapper_letter}>
      <span>{firstName[0]}</span>
      <span>{lastName[0]}</span>
     </div>
     <div className={styles.wrapper_username}>
      <span className={styles.firstName}>{firstName}</span>
      <span>{lastName}</span>
     </div>
    </div>
   </div>
  </>
 )

}


export default Username