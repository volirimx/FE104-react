import styles from "./confirm.module.css";
import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.back}>
        <Link className={styles.back__button} to="/">
          Back to Home
        </Link>
      </div>

      <h1>Confirm!</h1>
    </div>
  );
};

export default Confirm;
