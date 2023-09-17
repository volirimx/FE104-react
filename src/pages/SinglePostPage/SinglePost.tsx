import {useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./singlepost.module.css";
import like_active from "./img/like_active.png";
import like_disabled from "./img/like_disabled.png";
import dislike_active from "./img/dislike_active.png";
import dislike_disabled from "./img/dislike_disabled.png";
import bookmarks_active from "./img/bookmarks_active.png";
import bookmarks_disabled from "./img/bookmarks_disabled.png";
import { useAppDispatch } from "../../redux/hooks";
import {fetchSinglePost} from "../../redux/posts/posts"
import { useAppSelector } from "../../redux/hooks";
import { PostGrade } from "../../redux/posts/posts";
import { BookmarkedGrade } from "../../redux/posts/posts";
import { ratePost} from "../../redux/posts/posts";

import { handleBookmark } from "../../redux/posts/posts";
export const SinglePost = () => {    
    
    const { postId } = useParams();
    const dispatch = useAppDispatch();
    //как не через Number?
    const selectedPost = useAppSelector((state) => state.post.find((post) => post.id === Number(postId)));
    console.log(selectedPost);
    

    const handleRateButtonClick = (id: number, grade: PostGrade) => {
        dispatch(ratePost({id, grade}));
    };  
     const handleRateBookmarksClick = (id: number, isFavorite: BookmarkedGrade) => {
        dispatch(handleBookmark({id, isFavorite}));
    }; 

    // const [post, setPost] = useState<Post>();

    // useEffect(() => {
    //     const parsedPostId = parseInt(`${postId}`);
    //     if (!isNaN(parsedPostId)) { 
    //         getPostById({
    //             postId: parsedPostId,
    //             onSuccess: (data) => {
    //                 setPost(data);
    //             },
    //         });
    //     }
    // }, []);    
    // console.log(post); 

    useEffect(() => {
        if (postId !== undefined) { // Проверяем, что postId не undefined
            const parsedPostId = parseInt(postId); // Преобразуем в number
            dispatch(fetchSinglePost({ postId: parsedPostId }));
        }
    }, [dispatch, postId]);

    if (!selectedPost) return null;
    return (
        <div className={styles.singlepost_page}>
            <div className={styles.title}>
                <p>{selectedPost?.author} | {selectedPost.date}</p>
                <h1 id={styles.title}>{selectedPost?.title}</h1>
            </div>
            <div className={styles.content}>
                <img id={styles.main_image} src={selectedPost?.image}/>
                <div>
                    <h3>{selectedPost.text}</h3>
                </div>
                <div className={styles.post_buttons}>
                    <div 
                        id={styles.grades}>
                        <div 
                            id={styles.like} 
                            onClick={() => {
                                handleRateButtonClick(selectedPost.id, "liked");
                            }}               
                            >
                            <img src={selectedPost.grade === "liked" ?  like_active : like_disabled}/>
                        </div> 
                        <div 
                            id={styles.dislike} 
                            onClick={() => {
                                handleRateButtonClick(selectedPost.id, "disliked");
                            }}               
                            >
                            <img src={selectedPost.grade === "disliked" ?  dislike_active : dislike_disabled}/>
                        </div> 
                    </div>

                <div className={styles.save} 
                    onClick={() => {
                        handleRateBookmarksClick(selectedPost.id, true);
                    }}
                >
                    <div>
                        <img src ={selectedPost.isFavorite === true ?  bookmarks_active : bookmarks_disabled}/>
                    </div>
                    <h3 id={styles.add_text}>Add to favourites</h3>
                </div>
            </div>
            </div>           
        </div>
    );
}
