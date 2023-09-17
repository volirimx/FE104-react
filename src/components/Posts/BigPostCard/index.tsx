import styles from "./postcard.module.css"
import { PostEvaluation } from "../PostEvaluation";
import { IPostCard } from "../../../api/posts/types";

/*interface IPostCard{
    onClick: () => void;
    post: PostState;
    handleRatePost: (id: number, grade: PostGrade) => void;
    handleBookmarkedPost: (id: number, bookmarked: BookmarkedGrade) => void;
}*/

export const BigPostCard = ({onClick, post, handleRatePost, handleBookmarkedPost} : IPostCard) => {   

return(
        <div className={styles.post_container}>
            <div className={styles.content_container} onClick={onClick}>            
                <div className={styles.post_info}>
                    <p id={styles.post_date}>{post.date}</p>
                    <h1 id={styles.post_title}>{post.title}</h1>
                    <h3 id={styles.post_text}>{post.text}</h3>                
                </div>
                <div className={styles.post_image}>
                    <img src={post.image} className={styles.image_full_width}/>
                </div>            
            </div>
            <PostEvaluation post={post} handleRatePost={handleRatePost} handleBookmarkedPost={handleBookmarkedPost}/>
            <div className={styles.post_line}></div>
        </div>
    )
}