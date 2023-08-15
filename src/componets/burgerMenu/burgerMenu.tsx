import styles from './burgerMenu.module.css';
import { useState } from 'react';
import { User } from '../UserName/userName';

export const BurgerMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const toggleIsMenuOpened = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <div className={styles.container}>
      <div className={styles.burger} onClick={toggleIsMenuOpened}>
        <div
          className={`${styles.burgerLine} ${
            isMenuOpened ? styles.opennedLine : ''
          }`}
        ></div>
        <div
          className={`${styles.burgerLine} ${
            isMenuOpened ? styles.closedLine : ''
          }`}
        ></div>
        <div
          className={`${styles.burgerLine} ${
            isMenuOpened ? styles.closedLine : ''
          }`}
        ></div>
      </div>
      <User userName='asdf dafg' isMenuOpened={isMenuOpened} />
    </div>
  );
};
