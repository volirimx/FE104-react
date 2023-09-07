import { Title } from "../../components/Title"
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom'
import styles from "./confirmation.module.css"
export const RegistrationConfirmation = () => {
    return (    
        <div>
            <Title titleText="RegistrationConfirmation"/>        
            <div id={styles.container}>
                <div className={styles.succes_container}>
                    <div id={styles.text}>
                        <h4>Please activate your account with the activation</h4>
                        <h4>link in the letter @blblabla</h4>
                        <h4>Please, check your email!</h4>
                    </div>
                    <div id={styles.button}>
                        <Link to="/"><Button mode="primary"  name="Go to home" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}