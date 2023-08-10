import styles from './index.module.css';
import menuIcon from '../../assets/icons/menu.svg';
import crossIcon from '../../assets/icons/cross.svg';
import { User } from '../UserInfo/index.tsx';

export const Menu = (props: { isOpen: boolean, onMenuClick: (isOpen: boolean) => void }) => {
    return (
        <div>
            <div className={styles.menuWrapper} onClick={() => props.onMenuClick(props.isOpen)}>
                <img src={menuIcon} className={props.isOpen ? styles.hidden : styles.open}></img>
                <img src={crossIcon} className={props.isOpen ? styles.open : styles.hidden}></img>
            </div>
            {props.isOpen ? <User name='Artem Malkin' /> : null}
        </div>
    )
}