import axios from "axios";
import { Post } from "./types";

export const getPostById = async ({
  postId,
  onSuccess,
}: {
  postId: number;
  onSuccess(data: Post): void;
}) => {
  const response = await axios.get<Post>(
    `https://studapi.teachmeskills.by/blog/posts/${postId}`
  );
  if (!response.data || response.status !== 200) return;
  onSuccess(response.data);
};
