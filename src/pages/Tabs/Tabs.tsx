import { useContext, useEffect, useState } from "react";
import styles from "./tab.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

import { thunkGetPosts, setLikedPosts, setSavedPosts } from "../../redux/posts";

import ContextTheme from "../../ContextTheme";

const Tab = ({
  title1,
  title2,
  title3,
}: {
  title1: string;
  title2: string;
  title3: string;
}) => {
  const [open1, setOpenState1] = useState<boolean>(true);
  const [open2, setOpenState2] = useState<boolean>();
  const [open3, setOpenState3] = useState<boolean>();

  const toggleState1 = () => {
    setOpenState1(true);
    setOpenState2(false);
    setOpenState3(false);
  };
  const toggleState2 = () => {
    setOpenState2(true);
    setOpenState1(false);
    setOpenState3(false);
  };
  const toggleState3 = () => {
    setOpenState3(true);
    setOpenState2(false);
    setOpenState1(false);
  };
  const dispatch = useAppDispatch();

  const { likedPosts, savedPosts, posts } = useAppSelector(
    (state) => state.posts
  );
  const { darkMode } = useContext(ContextTheme);
  useEffect(() => {
    dispatch(setLikedPosts(posts.filter((post) => post.rate === 2)));
    dispatch(setSavedPosts(posts.filter((post) => post.saved)));
    if (posts.length === 0) {
      dispatch(thunkGetPosts(""));
    }
  }, [dispatch, posts.length, posts]);
  const mappedSavedPosts = savedPosts.map((post) => {
    return (
      <div className={styles.post} key={post.id}>
        <img className={styles.img} src={post.image} alt="" />
        <div className={styles.title}>{post.title}</div>
      </div>
    );
  });
  const mappedAllPosts = posts.map((post) => {
    return (
      <div className={styles.post} key={post.id}>
        <img className={styles.img} src={post.image} alt="" />
        <div className={styles.title}>{post.title}</div>
      </div>
    );
  });
  const mappedLikedPosts = likedPosts.map((post) => {
    return (
      <div className={styles.post} key={post.id}>
        <img className={styles.img} src={post.image} alt="" />
        <div className={styles.title}>{post.title}</div>
      </div>
    );
  });

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        <div className={styles.tabBlock}>
          <div
            className={`${styles.tab} ${
              open1 ? (darkMode ? styles.openTabDark : styles.openTab) : " "
            }`}
            onClick={toggleState1}
          >
            {title1}
          </div>
        </div>
        <div className={styles.tabBlock}>
          <div
            className={`${styles.tab} ${
              open2 ? (darkMode ? styles.openTabDark : styles.openTab) : " "
            }`}
            onClick={toggleState2}
          >
            {title2}
          </div>
        </div>
        <div className={styles.tabBlock}>
          <div
            className={`${styles.tab} ${
              open3 ? (darkMode ? styles.openTabDark : styles.openTab) : " "
            }`}
            onClick={toggleState3}
          >
            {title3}
          </div>
        </div>
        <div className={styles._}></div>
      </div>
      <div className={styles.p} style={{ display: open1 ? "block" : "none" }}>
        <div className={styles.posts}>{mappedAllPosts}</div>
      </div>
      <div className={styles.p} style={{ display: open2 ? "block" : "none" }}>
        <div className={styles.posts}> {mappedSavedPosts}</div>
      </div>

      <div className={styles.p} style={{ display: open3 ? "block" : "none" }}>
        <div className={styles.posts}> {mappedLikedPosts}</div>
      </div>
    </div>
  );
};

export default Tab;
