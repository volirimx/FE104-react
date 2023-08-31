import axios from "axios";
const getPost = async (id: string | undefined) => {
  if (id === undefined) return;
  const response = await axios.get(
    `https://studapi.teachmeskills.by/blog/posts/${id}`
  );
  console.log(response);

  return response.data;
};

export default getPost;
