import { Button } from '../../components/Button';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

export const ConfirmationPage = () => {
    const userInfo = localStorage.getItem("CurrentUser");
    let email = 'xxx@gmail.com';
    if (userInfo) {
        email = JSON.parse(userInfo).email;
    }
    return (
        <div className={styles.confirmationContainer}>
            <div className={styles.headers}>
                <Link to='/'><h5>Back to home</h5></Link>
                <h2>Registration Confirmation</h2>
            </div>
            <div className={styles.container}>
                <p>{`Please, activate your account with the activation link in the email ${email}.`}</p>
                <p>{`Please, check your email.`}</p>
                <Link to='/'><Button mode='primary' content='Go to home' /></Link>
            </div>
        </div>
    )
}