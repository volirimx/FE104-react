import styles from './tabs.module.css'

interface TabsProps {
    title: string
}

export const Tabs = (props: TabsProps) => {
    return (
        <table className='ml-80 w-2/5 text-black font-bold mb-6 mt-10'>   
                <thead className={styles.grayText}>
                <tr>
                    <th colSpan={3}>{props.title}</th>
                </tr>
            </thead>
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
