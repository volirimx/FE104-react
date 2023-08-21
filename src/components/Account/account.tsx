import styles from './account.module.css'
import { useState } from 'react';
import image from '..//..//assets/account_avatar.png'
import x_image from '..//../assets/x.png'
import { UserButton } from '../Users/userbutton';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';


export const Account = () => {
    
    
    const [state, setState] = useState(false);

    
    const { user } = useAuth() ?? {};
    
    


    const buttonClickHandler = () => {
        setState(!state);
    }   

    const humbBord = state ? `${styles.border}` : '';
    const hmbClasses = [`${styles.hamburger}`, humbBord]

    return (
        <div className={styles.container}>
            <div className={hmbClasses.join(' ')}
                onClick={buttonClickHandler}>
                <img className={styles.img} src={state ? x_image : image} alt="" />
                {state ? <div className={styles.burger}>
                { user && user.name ? 
                    <UserButton firstName="" lastName={user.name} /> : null
                }

                                      
            </div> : <></>}
            
            </div>
           
        </div>


    )
}
