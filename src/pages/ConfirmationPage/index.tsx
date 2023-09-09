import { Button } from '../../components/Button';
import styles from './index.module.css';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from "../../redux/hooks";
import { selectUserEmail } from "../../redux/user/user";
import axios from 'axios';
import { useEffect } from 'react'

export const ConfirmationPage = () => {
    const email: string = useAppSelector(selectUserEmail);   
    const {uid, token} = useParams();
    // NzAzOQ/bu609p-b9ea93f9f33d2193b5640f8568b3037e
    useEffect(() => {
        if(uid && token){
            (async () => {
                const response = await axios.post(
                    "https://studapi.teachmeskills.by/auth/users/activation/",
                    {uid, token}
                );
                console.log(response);
            })();
        }        
    }, [token, uid]);
    
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