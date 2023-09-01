import { useContext, useEffect, useState } from "react";
import styles from "./posts.module.css";
import ContextSearchInput from "../../ContextSearchInput";
import { useNavigate } from "react-router-dom";
import Save from "../../components/Svg/Save";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchPosts } from "../../api/getPosts";
import Like from "../../components/Svg/Like";
import { ratePost, savePost } from "../../redux/posts";
import Dislike from "../../components/Svg/Dislike";

import PopUp from "../../components/PopUp/PopUp";

const Posts = () => {
  const { searchInput } = useContext(ContextSearchInput);
  const dispatch = useAppDispatch();

  const { posts, isLoading, error } = useAppSelector((state) => state);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts(searchInput));
    }
  }, [searchInput, dispatch, posts.length]);

  const navigate = useNavigate();

  const redirect = (id: number) => {
    navigate(`${id}`);
  };

  const [active, setActive] = useState<boolean>(false);
  const [postId, setPostId] = useState<number | null>(null);
  const mappedPosts = posts.map((post) => {
    return (
      <div className={styles.post} key={post.id}>
        <img
          className={styles.img}
          src={post.image}
          alt=""
          onClick={() => {
            setPostId(post.id);
            setActive((old) => !old);
          }}
        />

        <div
          className={styles.title}
          onClick={() => {
            redirect(post.id);
          }}
        >
          {post.title}
        </div>

        <div className={styles.interface}>
          <div className={styles.like}>
            <Like
              id={post.id}
              onClick={() => dispatch(ratePost({ rate: 2, id: post.id }))}
            />
          </div>
          <div className={styles.dislike}>
            <Dislike
              id={post.id}
              onClick={() => dispatch(ratePost({ rate: 1, id: post.id }))}
            />
          </div>
          <div className={styles.save}>
            <Save
              id={post.id}
              onClick={() => {
                dispatch(savePost({ saved: true, id: post.id }));
              }}
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div>{isLoading && <h1> Загрузка постов...</h1>}</div>
      <div>{error && <h1> Ошибочка!!!</h1>}</div>
      <div className={styles.posts}>{mappedPosts}</div>
      <PopUp
        setActive={setActive}
        active={active}
        id={postId}
        setId={setPostId}
      />
    </>
  );
};
export default Posts;
