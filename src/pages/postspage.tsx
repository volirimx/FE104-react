import { Tabs } from "../components/Tabs/tabs";
import { Card1 } from "../components/Card1/card1";
import { Card2 } from "../components/Card2/card2";
import styles from "./postspage.module.css";
import { RootState } from "../redux/store";
import { selectAllPosts } from "../redux/counter/posts";
import { useEffect } from "react";
import { fetchPosts } from "../redux/counter/posts";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { PaginationComponent } from "../components/PaginationComponent/paginationComponent";

export const Postspage = () => {
  
  const dispatch = useAppDispatch();
  const cardsObj = useAppSelector((state: RootState) => selectAllPosts(state));
  const cards = useAppSelector((state: RootState) => selectAllPosts(state).results);
  
  console.log(cardsObj);
  
  console.log(cards);
  

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

      <div>
        {/* <PaginationComponent
        handlePageClick={}
        allPagesCount={}
        currentPageNumber={}
        /> */}
      </div>
    </>
  );
};
