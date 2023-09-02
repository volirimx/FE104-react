import { PostState } from "../../redux/posts/posts";
import { PostGrade } from "../../redux/posts/posts";
import { BookmarkedGrade } from "../../redux/posts/posts";

export interface Post {
    id: number;
    image?: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
}

export interface IPostCard{
    onClick: () => void;
    post: PostState;
    handleRatePost: (id: number, grade: PostGrade) => void;
    handleBookmarkedPost: (id: number, bookmarked: BookmarkedGrade) => void;
}
    
