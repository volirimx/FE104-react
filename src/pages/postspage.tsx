import { Tabs } from "../components/Tabs/tabs";
import { Card1 } from "../components/Card1/card1";
import { Card2 } from "../components/Card2/card2";
import styles from "./postspage.module.css";
import { RootState } from "../redux/store";
import { selectAllPosts } from "../redux/counter/posts";
import { useEffect, useCallback, useMemo } from "react";
import { fetchPosts } from "../redux/counter/posts";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { PaginationComponent } from "../components/PaginationComponent/paginationComponent";
import { useSearchParams } from "react-router-dom";

export const Postspage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const searchValue = searchParams.get("name");
  const dispatch = useAppDispatch();
  const cardsObj = useAppSelector((state: RootState) => selectAllPosts(state));
  const cards = useAppSelector(
    (state: RootState) => selectAllPosts(state).results
  );

  useEffect(() => {
    if (cards.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, cards]);

  useEffect(() => {
    const stringParams = searchParams.toString();

    if (!stringParams.length) {
      setSearchParams("page=1");
    } else {
      dispatch(fetchPosts(searchParams.toString()));
    }
  }, [searchParams]);

  const handlePageClick = useCallback(
    (pageNumber: number) => {
      setSearchParams((prevState) => {
        prevState.set("page", pageNumber.toString());
        return prevState;
      });
    },
    [setSearchParams]
  );

  const currentPage = useMemo(() => {
    const currentPageFromParams = searchParams.get("page");
    if (currentPageFromParams) {
      return parseInt(currentPageFromParams);
    } else {
      return 1;
    }
  }, [searchParams]);

  return (
    <>
      <Tabs title="BLOG" />

      <div className={styles.bigBlock}>
        <div className={styles.containerStyle}>
          {cards.map((card) => <Card1 card={card} key={card.id} />)}
         
        </div>

        <div className={styles.containerStyle2}>
        {cards.map((card) => <Card2 card={card} key={card.id} />)}
          {/* {searchValue
            ? cards
                .filter((card) => card.title.includes(searchValue))
                .map((filteredCard) => (
                  <Card2 card={filteredCard} key={filteredCard.id} />
                ))
            : cards.map((card) => <Card2 card={card} key={card.id} />)} */}
        </div>
      </div>

      <div>
        <PaginationComponent
          handlePageClick={handlePageClick}
          allPagesCount={cardsObj.count}
          currentPageNumber={currentPage}
        />
      </div>
    </>
  );
};
