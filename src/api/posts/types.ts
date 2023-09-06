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