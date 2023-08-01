import styles from './index.module.css'

interface props {
    user: string;
}

export function Username({user} : props) {
    const words = user.split(' ');
    const initials = words.map(word => word.charAt(0));
    const initialsString = initials.join('');
    return <div className={styles.Username}>
        <div className={styles.UsernameShort}>{initialsString}</div>
        <h1 className={styles.h1}>{user}</h1>
    </div>
}