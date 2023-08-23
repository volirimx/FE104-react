import styles from './index.module.css';
import menuIcon from '../../assets/icons/menu.svg';
import crossIcon from '../../assets/icons/cross.svg';

interface IMenu {
    isOpen: boolean;
    onMenuClick: (isOpen: boolean) => void;
}
export const Menu = ({ isOpen, onMenuClick }: IMenu) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.menuWrapper} onClick={() => onMenuClick(isOpen)}>
                <img src={menuIcon} className={isOpen ? styles.hidden : styles.open}></img>
                <img src={crossIcon} className={isOpen ? styles.open : styles.hidden}></img>
            </div>
        </div>
    )
}

export default Menu;