export interface CardDataResult {
  results: Post[];
}


export interface User {
  name: "";
  email: "";
}

export interface PostState {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  description: string;
  author: number;
}

export interface Post extends PostState {
  favorites?: boolean;
}
