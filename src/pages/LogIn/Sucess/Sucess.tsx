import styles from "./sucess.module.css";
import { Link } from "react-router-dom";

const Sucess = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.back}>
        <Link className={styles.back__button} to="/">
          Back to Home
        </Link>
      </div>

      <h1>Sucess</h1>
    </div>
  );
};

export default Sucess;
