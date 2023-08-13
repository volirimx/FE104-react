import styles from './tabs.module.css'


export const Tabs = () => {
    
    return (
        <table className={styles.table}>
            <thead className={styles.grayText}>TABS</thead>
            <tbody>
                <tr>
                    <td className={styles.column}>All</td>
                    <td className={styles.column}>My favorites</td>
                    <td className={styles.column}>Popular</td>
                </tr>
            </tbody>
        </table>
    )
}