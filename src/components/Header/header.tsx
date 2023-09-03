import styles from "./header.module.css";
import image_search from "..//../assets/icons8-search-30.png";
import { Account } from "../Account/account";
import { Burgermenu } from "../Burgermenu/burgermenu";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Burgermenu />

      <input type="search" className={styles.search} />

      <div className={styles.searchBtn}>
        <img className={styles.imgBtn} src={image_search} alt="" />
      </div>

      <div>
        <Account />
      </div>
    </div>
  );
};
