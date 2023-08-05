import styles from './index.module.css';
import menuIcon from './icons/menu.svg';
import crossIcon from './icons/cross.svg';
import { useState } from 'react'
import { User } from '../UserInfo/index.tsx';

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className={styles.menuWrapper} onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)}>
                <img src={menuIcon} className={isOpen ? styles.hidden : styles.open}></img>
                <img src={crossIcon} className={isOpen ? styles.open : styles.hidden}></img>
            </div>
            {isOpen ? <User name='Artem Malkin' /> : null}
        </div>
    )
}