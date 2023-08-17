import styles from './index.module.css';
import profileIcon from '../../assets/icons/profile.png';

export const UserProfile = () => {
    return (
        <div className={styles.profileWrapper}>
            <img src={profileIcon}></img>
        </div>
    )
}