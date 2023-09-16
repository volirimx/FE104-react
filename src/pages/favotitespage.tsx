import { Tabs } from "../components/Tabs/tabs";
import { Card1 } from "../components/Card1/card1";
import { Card2 } from "../components/Card2/card2";
import styles from "./favorites.module.css";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { selectAllPosts } from "../redux/counter/posts";

export const FavoritesPage = () => {
  const posts = useAppSelector(
    (state: RootState) => selectAllPosts(state).results
  );
  const fav = posts.filter((post) => post.favorites === true);

  return (
    <>
      <Tabs title="BLOG" />

      <div className={styles.bigBlock}>
        <div className={styles.containerStyle}>
          {fav.map((card) => (
            <Card1 card={card} key={card.id} />
          ))}
        </div>

        <div className={styles.containerStyle2}>
          {fav.map((card) => (
            <Card2 card={card} key={card.id} />
          ))}
        </div>
      </div>
    </>
  );
};
