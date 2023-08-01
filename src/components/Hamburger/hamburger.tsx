import { useState } from 'react';
import styles from './hamburger.module.css'
import image from '../../assets/hamburger_button.png'
import x_image from '../../assets/x.png'
import { UserButton } from '../Users/userbutton';


interface HamburgerProps {
    opened: boolean;
}

export const Hamburger = (props: HamburgerProps) => {
    const [state, setState] = useState(false);
    let imageRender = image;
    
    { state ? imageRender=image: imageRender=x_image}


    
    return (
        <div className={styles.hamburger}
        onClick={() => setState(prev => !prev)}>
            <img className={styles.img} src={imageRender} alt="x" />
            <UserButton firstName="Artem" lastName="Malkin"/>
            

        </div>
    )
}

