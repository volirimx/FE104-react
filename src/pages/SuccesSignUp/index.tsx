import { Title } from "../../components/Title"
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom'
import styles from "./successignin.module.css"
export const SuccessSignUp = () => {
    return (    
        <div>
            <Title titleText="Success"/>        
            <div id={styles.container}>
                <div className={styles.succes_container}>
                    <div id={styles.text}>
                        <h4>Email confirmed.</h4>
                        <h4>Your registration is now completed.</h4>
                    </div>
                    <div id={styles.button}>
                        <Link to="/"><Button mode="primary"  name="Go to home" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}