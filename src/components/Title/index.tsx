import styles from './index.module.css';
interface Title {
    name: string
}

export const Title = ({ name }: Title) => {
    return (
        <div className={styles.title}>{name}</div>
    )
}