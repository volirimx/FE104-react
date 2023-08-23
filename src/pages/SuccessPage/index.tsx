import { Button } from '../../components/Button';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

export const SuccessPage = () => {
    return (
        <div className={styles.signInContainer}>
            <div className={styles.headers}>
                <Link to='/'><h5>Back to home</h5></Link>
                <h2>Sign In</h2>
            </div>
            <div className={styles.container}>
                <p>E-mail confirmed.</p>
                <p>Your registration is now complited.</p>
                <Link to='/'><Button mode='primary' content='Go to home' /></Link>
            </div>
        </div>
    )
}