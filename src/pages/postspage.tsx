import { Tabs } from "../components/Tabs/tabs";
import { Card1 } from "../components/Card1/card1";
import { Card2 } from "../components/Card2/card2";
import { useCardData } from "../hooks/cards";
import styles from "./postspage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { selectAllPosts } from "../redux/counter/posts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../redux/counter/posts";

export const Postspage = () => {
  // const { cards } = useCardData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const cards = useSelector((state: RootState) => selectAllPosts(state));

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
