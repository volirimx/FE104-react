import styles from './tabs.module.css';
import { useState } from 'react';

type TabsMode = 'all' | 'myFavorites' | 'popular';

interface Tabs {
  text: string;
  mode: TabsMode;
  disabled?: boolean;
  // onClick: (...args: any) => any;
}

export const Tabs = ({ text, mode, disabled }: Tabs) => {
  const [isTabOpened, setIsTabOpened] = useState<boolean>(false);

  const toggleIsTabOpened = () => {
    setIsTabOpened(!isTabOpened);
  };
  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.tabs} ${styles[mode]}`}
        disabled={disabled}
        onClick={toggleIsTabOpened}
      >
        {text}
      </button>
    </div>
  );
};
