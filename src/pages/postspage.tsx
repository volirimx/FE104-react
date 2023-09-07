import { Tabs } from "../components/Tabs/tabs";
import { Card1 } from "../components/Card1/card1";
import { Card2 } from "../components/Card2/card2";
import styles from "./postspage.module.css";
import { RootState } from "../redux/store";
import { selectAllPosts } from "../redux/counter/posts";
import { useEffect } from "react";
import { fetchPosts } from "../redux/counter/posts";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const Postspage = () => {
  // const { cards } = useCardData();
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state: RootState) => selectAllPosts(state));

  useEffect(() => {
    if (cards.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, cards]);

  return (
    <>
      <Tabs title="BLOG" />

      <div className={styles.bigBlock}>
        <div className={styles.containerStyle}>
          {cards.map((card) => (
            <Card1 card={card} key={card.id} />
          ))}
        </div>

        <div className={styles.containerStyle2}>
          {cards.map((card) => (
            <Card2 card={card} key={card.id} />
          ))}
        </div>
      </div>
    </>
  );
};
