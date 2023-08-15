import styles from './tabs.module.css';

type TabsMode = 'all' | 'myFavorites' | 'popular';

interface Tabs {
  text: string;
  mode: TabsMode;
  disabled?: boolean;
  onClick: (...args: any) => any;
}

export const Tabs = ({ text, mode, disabled, onClick }: Tabs) => {
  return (
    <button
      className={`${styles.tabs} ${styles[mode]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
