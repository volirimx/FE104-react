import styles from "./middlepostcard.module.css";
import Zhenya from "./img/zhenya.jpg";
import { PostEvaluation } from "../PostEvaluation";
import { IPostCard } from "../../../api/posts/types";

export const MiddlePostCard = ({onClick, post, handleRatePost, handleBookmarkedPost} : IPostCard) => {
return(<div className={styles.post_container}>
            <div className={styles.content_container} onClick={onClick}>          
                <div className={styles.post_image}>
                    <img
                        src={post && post.image ? post.image : Zhenya}
                        onError={(e) => {
                            const imgElement = e.target as HTMLImageElement;
                            imgElement.src = Zhenya;
                        }}
                        onLoad={() => console.log("load img!")}
                        className={styles.image_full_width}
                    />
                </div>
                <div className={styles.post_info}>
                    <p id={styles.post_date}>{post.date}</p>
                    <h1 id={styles.post_title}>{post.title}</h1>             
                </div>  
            </div>    
            <PostEvaluation post={post} handleRatePost={handleRatePost} handleBookmarkedPost={handleBookmarkedPost}/>
            <div className={styles.post_line}></div>
        </div>
    )
}