import {PostState} from "../../redux/posts/posts";
import { PostGrade } from "../../redux/posts/posts";
import styles from "./post.module.css";
export const Post = ({
    post,
    handleRatePost,
}:{
    post: PostState;
    handleRatePost: (id: number, grade: PostGrade) => void;
}) => {
    const handleLikeClick = () => {
        post.grade === "liked" ? handleRatePost(post.id, undefined) : handleRatePost(post.id, "liked");
    }
    const handleDisikeClick = () => {
        post.grade === "disliked" ? handleRatePost(post.id, undefined) : handleRatePost(post.id, "disliked");
    }
    return(<div>
            <div>
                <div>
                    <p>{post.title}</p>
                    <p>{post.text}</p>
                </div>
                <div className={styles.grade_buttons}>
                    <div 
                    onClick={() => {
                        handleLikeClick();
                    }}
                    className={post.grade === "liked" ?  styles.like_button : styles.default_button}                 
                    >Like</div>
                    <div
                    onClick={() => {
                        handleDisikeClick();
                    }}
                    className={post.grade === "disliked" ?  styles.dislike_button : styles.default_button}                     
                    >Dislike</div>
                </div>
            </div>
    </div>)
} 
export default Post;
