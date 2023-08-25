import { Button } from '../../components/UI/Button/Button'
import styles from './registrationConfirmation.module.css'

export const RegistrationConfirmation = () => {
   return (
      <>
         <div className={styles.message}>
            <p>Please, activate your account with the activation link sent to your email adress example@gmail.com ! Please, check your email!
            </p>
            <Button className={styles.button} name='Go To Home' mode='primary' />
         </div>
      </>
   )
}