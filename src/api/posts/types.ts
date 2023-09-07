import { PostGrade } from "../../redux/post/post";

export type Post = {
    id: number;
    image?: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
    likes: number;
    dislikes: number;
    onClick: (id: number) => void;
    onRateClick: (id: number, grade: PostGrade) => void
}

export type PostRequestType = {
    limit: number;
    offset: number;
    callback: (posts: Post[] | null) => void;
}

export type PostByIdRequestType = {
    id: number;
    callback: (post: Post | null) => void;
}