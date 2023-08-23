import styles from './index.module.css';
import profileIcon from '../../assets/icons/profile.png';

export const UserProfile = (props: { onClick: () => void }) => {
    return (
        <div className={styles.profileWrapper} key={'profile'} onClick={() => props.onClick()}>
            <img src={profileIcon}></img>
        </div>
    )
}