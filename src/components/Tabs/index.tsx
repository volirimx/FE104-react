import styles from './index.module.css';

export type Tab = {
    id: number;
    name: string;
    disabled?: boolean;
}
export type Tabs = {
    tabs: Tab[];
    selectedId: number;
    onTabClick: (id: number) => void;
}
export const Tabs = ({ tabs, selectedId, onTabClick }: Tabs) => {
    return (
        <div className={styles.tabsWrapper}>
            {tabs.map((tab) => (
                <div key={tab.id} className={`${styles.tabWrapper} ${tab.id === selectedId ? styles.tabActive : styles.tabInactive}`}>
                    <button className={styles.button} disabled={tab.disabled} onClick={() => onTabClick(tab.id)}>
                        {tab.name}
                    </button>
                </div>
            ))}
        </div>
    )
}