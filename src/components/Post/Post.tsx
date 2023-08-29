import { PostGrade, PostState } from "../../redux/posts/posts";

export const Post = ({
  post,
  handleRatePost,
}: {
  post: PostState;
  handleRatePost: (id: number, grade: PostGrade) => void;
}) => {
  return (
    <div className="flex flex-col items-end bg-lightGray p-[20px] rounded-[20px]">
      <div className="w-full">
        <p>{post.title}</p>
        <p>{post.text}</p>
      </div>
      <div className="w-fit flex gap-2">
        <div
          onClick={() => {
            handleRatePost(post.id, "liked");
          }}
          className={`p-2 rounded-[5px] border-[black] border-[1px] cursor-pointer ${
            post.grade === "liked" ? "bg-green-500" : ""
          }`}
        >
          Like
        </div>
        <div
          onClick={() => {
            handleRatePost(post.id, "disliked");
          }}
          className={`p-2 rounded-[5px] border-[black] border-[1px] cursor-pointer ${
            post.grade === "disliked" ? "bg-red" : ""
          }`}
        >
          Dislike
        </div>
      </div>
    </div>
  );
};
