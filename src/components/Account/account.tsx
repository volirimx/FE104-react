import styles from './account.module.css'
import { useState } from 'react';
import image from '..//..//assets/account_avatar.png'
import x_image from '..//../assets/x.png'
import { UserButton } from '../Users/userbutton';
import { useNavigate } from "react-router-dom";


export const Account = () => {
    
    
    const [state, setState] = useState(false);
    
    const navigate = useNavigate();
    const goToSuccess = () => navigate('/success')


    const buttonClickHandler = () => {
        setState(!state);
        goToSuccess();

    }   

    const humbBord = state ? `${styles.border}` : '';
    const hmbClasses = [`${styles.hamburger}`, humbBord]

    return (
        <div className={styles.container}>
            <div className={hmbClasses.join(' ')}
                onClick={buttonClickHandler}>
                <img className={styles.img} src={state ? x_image : image} alt="" />
                {state ? <div className={styles.burger}>
                    <UserButton firstName="Artem" lastName="Malkin" />                    
            </div> : <></>}
            
            </div>
           
        </div>


    )
}
