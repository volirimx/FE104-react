import { BookmarkedGrade, PostState } from "../../../redux/posts/posts";
import { PostGrade } from "../../../redux/posts/posts";

import styles from "./evaluation.module.css";
import like_active from "./img/like_active.png";
import like_disabled from "./img/like_disabled.png";
import dislike_active from "./img/dislike_active.png";
import dislike_disabled from "./img/dislike_disabled.png";
import bookmarks_active from "./img/bookmarks_active.png";
import bookmarks_disabled from "./img/bookmarks_disabled.png";
import menu from "./img/menu.png";

export const PostEvaluation = ({
    post,
    handleRatePost,
    handleBookmarkedPost,
}:{
    post: PostState;
    handleRatePost: (id: number, grade: PostGrade) => void;
    handleBookmarkedPost: (id: number, isFavorite: BookmarkedGrade) => void;
}) => {
    
    return(
        <div className={styles.post_buttons}>
                <div className={styles.like_dislike}>
                    <div 
                        onClick={() => {
                            // handleLikeClick();
                            handleRatePost(post.id, "liked");
                        }}               
                        >
                        <img src={post.grade === "liked" ?  like_active : like_disabled}/>
                    </div>                    
                    <div
                        onClick={() => {
                            // handleDisikeClick();
                            handleRatePost(post.id, "disliked");                            
                        }}                     
                    >
                        <img src={post.grade === "disliked" ?  dislike_active : dislike_disabled}  id={styles.dislike}/>
                    </div>
                </div>
                <div className={styles.bookmarks_menu}>
                    <div
                        onClick={() => {
                            // handleBookmarksClick();
                            handleBookmarkedPost(post.id, true);
                        }}  
                    >
                        <img src ={post.isFavorite === true ?  bookmarks_active : bookmarks_disabled} id={styles.bookmarks}/>
                    </div>
                    <div>
                        <img src = {menu} id={styles.menu}/>
                    </div>
                </div>
        </div>
    )
}