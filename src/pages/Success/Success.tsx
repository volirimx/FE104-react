import { Button } from '../../components/UI/Button/Button'
import styles from './success.module.css'

export const Success = () => {
   return (
      <>
         <div className={styles.message}>
            <p>Email confirmed! <br />Your registration is now completed!</p>
            <Button className={styles.button} name='Go To Home' mode='primary' />
         </div>
      </>
   )
}