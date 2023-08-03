import { useState } from 'react';
import styles from './hamburger.module.css'
import image from '..//../assets/pngwing.com.png'
import x_image from '../../assets/x.png'
import { UserButton } from '../Users/userbutton';


export const Hamburger = () => {
    const [state, setState] = useState(false);
    
    const buttonClickHandler = () => {
        setState(!state)
    }

    
    return (
        <div className={styles.hamburger}
        onClick={buttonClickHandler}>
            <img className={styles.img} src={state ? x_image: image} alt="" />
            {state ? <UserButton firstName="Artem" lastName="Malkin"/>: <></>}
            

        </div>
    )
}

