import { useState } from "react";
import styles from "./tab.module.css";

const Tab = (props: { title1: string; title2: string; title3: string }) => {
  const [open1, setOpenState1] = useState<boolean>(true);
  const [open2, setOpenState2] = useState<boolean>();
  const [open3, setOpenState3] = useState<boolean>();
  const toggleState1 = () => {
    setOpenState1(true);
    setOpenState2(false);
    setOpenState3(false);
  };
  const toggleState2 = () => {
    setOpenState2(true);
    setOpenState1(false);
    setOpenState3(false);
  };
  const toggleState3 = () => {
    setOpenState3(true);
    setOpenState2(false);
    setOpenState1(false);
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        <div className={styles.tabBlock}>
          <div
            className={`${styles.tab} ${open1 ? styles.openTab : " "}`}
            onClick={toggleState1}
          >
            {props.title1}
          </div>
        </div>
        <div className={styles.tabBlock}>
          <div
            className={`${styles.tab} ${open2 ? styles.openTab : " "}`}
            onClick={toggleState2}
          >
            {props.title2}
          </div>
        </div>
        <div className={styles.tabBlock}>
          <div
            className={`${styles.tab} ${open3 ? styles.openTab : " "}`}
            onClick={toggleState3}
          >
            {props.title3}
          </div>
        </div>
        <div className={styles._}></div>
      </div>
      <p className={styles.p} style={{ display: open1 ? "block" : "none" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui
        deleniti rerum maiores delectus veniam harum assumenda minus ratione
        nulla?
      </p>
      <p className={styles.p} style={{ display: open2 ? "block" : "none" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione optio
        illo facilis architecto temporibus ea, aperiam cupiditate non, a
        voluptate fugit atque repudiandae sequi quas. Beatae ad nihil aliquid
        ducimus amet magni reiciendis sapiente, officia quasi ipsam autem ipsum
        necessitatibus?
      </p>
      <p className={styles.p} style={{ display: open3 ? "block" : "none" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam sapiente
        dicta rem illo, necessitatibus debitis sed ea in, dolore ut veniam sint
        maiores maxime labore quaerat cum accusantium id quisquam error suscipit
        repellat delectus? Vero, magni voluptas ea earum corrupti alias iure
        amet placeat delectus provident sunt pariatur rem sapiente.
      </p>
    </div>
  );
};

export default Tab;
