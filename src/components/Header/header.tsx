import styles from "./header.module.css";
import image_search from "..//../assets/icons8-search-30.png";
import { Account } from "../Account/account";
import { Burgermenu } from "../Burgermenu/burgermenu";
import { useSearchParams } from "react-router-dom";

export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prevParams) => {
      if (!e.target.value.length) {
        prevParams.delete("name");
      } else {
        prevParams.set("name", e.target.value);
        prevParams.set("page", "1");
      }
      return prevParams;
    });
  };

  return (
    <div className={styles.container}>
      <Burgermenu />

      <input
        type="search"
        onChange={handleSearchInputChange}
        placeholder="Enter search value"
        className={styles.search}
      />

      <div className={styles.searchBtn}>
        <img className={styles.imgBtn} src={image_search} alt="" />
      </div>

      <div>
        <Account />
      </div>
    </div>
  );
};
