import { useState } from 'react';
import styles from './header.module.css'
import image from '..//../assets/pngwing.com.png'
import x_image from '../../assets/x.png'
import { UserButton } from '../Users/userbutton';
import { SearchBtn } from '../SearchButton/searchButton';


export const Header = () => {
    const [state, setState] = useState(false);

    const buttonClickHandler = () => {
        setState(!state)
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

            <input type="search" className={styles.search} />

            <div>
                <SearchBtn />
            </div>

            <div>
                <UserButton firstName="Artem" lastName="Malkin" />
            </div>

        </div>


    )
}

