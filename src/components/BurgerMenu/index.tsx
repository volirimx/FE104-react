import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./index.module.css";
import { CredentialsBlock } from "../CredentialsBlock";

export const BurgerMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [numberState, setNumberState] = useState<number>(0);

  const toggleIsMenuOpened = () => {
    setIsMenuOpened((prevValue) => !prevValue);
  };
  const toggleIsSecondMenuOpened = () => {
    setNumberState((oldState) => oldState + 1);
  };

  const summ = useCallback(() => {
    return 1 + numberState;
  }, [numberState]);

  const memoisedSumm = useMemo(() => {
    return 1 + numberState;
  }, [numberState]);

  useEffect(() => {
    (async () => {
      // await setNumberState(numberState + 1);
      // await setNumberState(numberState + 1);
      // await setNumberState(numberState + 1);

      setNumberState((old) => old + 1);
      setNumberState((old) => old + 1);
      setNumberState((old) => old + 1);
    })();
  }, []);

  console.log(numberState);

  return (
    <div className={styles.container}>
      <button onClick={toggleIsSecondMenuOpened}>asd</button>
      <div className={styles.burger} onClick={toggleIsMenuOpened}>
        <div
          className={`${styles.burgerLine} ${
            isMenuOpened ? styles.openedLine : ""
          }`}
        ></div>
        <div
          className={`${styles.burgerLine} ${
            isMenuOpened ? styles.closedLine : ""
          }`}
        ></div>
        <div
          className={`${styles.burgerLine} ${
            isMenuOpened ? styles.openedLine : ""
          }`}
        ></div>
      </div>
      <CredentialsBlock summ={memoisedSumm} />
    </div>
  );
};
