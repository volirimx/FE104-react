import styles from "./index.module.css";

interface User {
    name: string
}
export const User = ({ name }: User) => {
    const initials: string = name.split(" ").map(item => item[0]).join('');
    return (
        <div className={styles.container}>
            <div className={styles.initials}>{initials}</div>
            <div className={styles.user}>{name}</div>
        </div>
    );
};