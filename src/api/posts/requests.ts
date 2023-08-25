import axios from "axios";
import { forPost } from "./types";

export const getPosts =  async ({ onSuccess }: {
   onSuccess(data: any): void;
}) => {
   const response = await axios.get<forPost>(
      "https://studapi.teachmeskills.by/blog/posts/?limit=10&offset=10"
   );
   if (!response.data || response.status !== 200) return;
   onSuccess(response.data.results);
}


export const getPostById =  async ({ onSuccess, id }: {
   onSuccess(data: any): void;
   id: number;
}) => {
   const response = await axios.get<forPost>(
      `https://studapi.teachmeskills.by/blog/posts/${id}`
   );
   if (!response.data || response.status !== 200) return;
   onSuccess(response.data);
}