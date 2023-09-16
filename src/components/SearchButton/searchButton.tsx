import styles from "../SearchButton/searchBtn.module.css";
import image from "..//../assets/icons8-search-30.png";

export const SearchBtn = () => {
  return (
    <div className={styles.search}>
      <img className={styles.img} src={image} alt="" />
    </div>
  );
};
