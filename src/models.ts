export interface CardDataResult {
  results: Post[];
}

export interface User {
  name: string;
  email: string;
  access: string;
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

export interface UserRequest {
  username: string;
  email: string;
  password: string;
  // Добавьте другие поля, если необходимо
}

export interface UserLogin {
  email: string;
  password: string;
  // Добавьте другие поля, если необходимо
}

export interface UserAfterLogin {
  email: string;
  loginUser: string | null;
  accessToken: string;
  // Добавьте другие поля, если необходимо
}

export interface ObjectForAddPost {
  accessToken: string;
  id: number;
  // Добавьте другие поля, если необходимо
}
