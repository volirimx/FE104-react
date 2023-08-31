import styles from "./post.module.css";
import { useEffect, useState } from "react";
import { ForPost } from "../../redux/posts";
import { useParams } from "react-router-dom";
import getPost from "../../api/getPost";

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState<ForPost>();
  useEffect(() => {
    (async () => {
      const post = await getPost(id);
      setPost(post);
    })();
  }, [id]);

  return post ? (
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
  ) : null;
};
