import { User } from '../User/index.tsx';
import styles from './index.module.css';
import { useThemeContext } from '../../context/ThemeContext/index.tsx';
import moon from './../../assets/icons/moon.png';
import moonDis from './../../assets/icons/moonDisable.png';
import sun from './../../assets/icons/sun.svg';
import sunDis from './../../assets/icons/sunDisable.svg';

export type NavigateType = {
    name: string;
    onLightClick: () => void;
    onDarkClick: () => void;
}

export const NavigatePanel = ({ name, onLightClick, onDarkClick }: NavigateType) => {
    const themeContext = useThemeContext();    
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    {name ? <User name={name} /> : null}
                </div>
                <div>Home</div>
                <div>Add post</div>
            </div>            
            <div className={styles.footer}>
                <div className={styles.images}> 
                    <div className={styles.imgContainer} onClick={onLightClick}>
                        <img src={themeContext.theme === 'light' ? sun : sunDis}></img>
                    </div>
                    <div className={styles.imgContainer} onClick={onDarkClick}>
                    <img src={themeContext.theme === 'light' ? moonDis : moon}></img>
                    </div>
                </div>
                <div className={styles.logInfo}>
                    {name ? 'Log Out': 'Log In'}
                </div>
            </div>
        </div>
    )
}