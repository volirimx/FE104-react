import styles from './index.module.css';

export interface Tab {
    id: number;
    name: string;
    disabled?: boolean;
}
export const Tabs = (props: { tabs: Tab[], selectedId: number, onTabClick: (id: number) => void }) => {
    return (
        <div className={styles.tabsWrapper}>
            {props.tabs.map((tab) => (
                <div key={tab.id} className={`${styles.tabWrapper} ${tab.id === props.selectedId ? styles.tabActive : styles.tabInactive}`}>
                    <button className={styles.button} disabled={tab.disabled} onClick={() => props.onTabClick(tab.id)}>
                        {tab.name}
                    </button>
                </div>
            ))}
        </div>
    )
}