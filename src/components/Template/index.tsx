import styles from './index.module.css'
import image from '../../assets/brightness.png'
import { ReactNode, useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom'

interface props {
    children?: ReactNode;
}

export function Template({children} : props) {
    const [theme, setTheme] = useState(false);
    const navigate = useNavigate();

    const handleChange = () => {
        setTheme(!theme);
    }

    return <div className={`${styles.fon} ${theme? styles.wrapperDark : styles.wrapperWhite}`}>
        <Header change={theme}>
            <button 
                className={styles.theme} 
                onClick={handleChange}>
                    <img className={`${styles.image} ${theme? styles.imageWhite: ''}`} src={image} alt="" />
            </button>
            <Button mode='Primary' text='Next Page' isDisabled={false} onClick={() => {navigate('/nextPage')}}/>
            HEADERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
        </Header>
        <div className={styles.content}>{children}</div>
        <Footer change={theme}>FOOTERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR</Footer>
    </div>
}