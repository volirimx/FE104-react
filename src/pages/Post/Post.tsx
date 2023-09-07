import styles from "./post.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { thunkSelectPost } from "../../redux/posts";

export const Post = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunkSelectPost(id));
  }, [id, dispatch]);
  const post = useAppSelector((store) => store.posts.post);

  return post ? (
    <>
      <div className={styles.post}>
        <div className={styles.post__image}>
          <img className={styles.post__image__item} src={post.image} alt="" />
        </div>
        <div className={styles.post__info}>
          <div className={styles.post__title}>{post.title}</div>
          <div className={styles.post__description}>{post.description}</div>
          <div className={styles.post__date}>{post.date}</div>
          <div className={styles.post__author}>Author:{post.author}</div>
        </div>
      </div>
    </>
  ) : null;
};
