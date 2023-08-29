import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  PostGrade,
  fetchPosts,
  ratePost,
  selectAllPosts,
} from "../redux/posts/posts";
import { Post } from "../components/Post/Post";

export const Posts = () => {
  const posts = useAppSelector(selectAllPosts);
  const dispatch = useAppDispatch();
  console.log(posts);

  const handleRateButtonClick = (id: number, grade: PostGrade) => {
    dispatch(ratePost({ id, grade }));
  };

  return (
    <div className="flex flex-col max-w-[400px] p-[20px] gap-3">
      <button
        onClick={() => {
          dispatch(fetchPosts());
        }}
      >
        oa
      </button>
      {/* {posts.map((post) => (
        <Post
          post={post}
          key={post.id}
          handleRatePost={handleRateButtonClick}
        />
      ))} */}
    </div>
  );
};
