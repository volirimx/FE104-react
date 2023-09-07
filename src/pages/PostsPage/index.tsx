import { useNavigate } from "react-router-dom"
import { Post } from "../../api/posts/types";
import { useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { BigPostCard } from "../../components/Posts/BigPostCard";
import styles from "./postspage.module.css";
import {MiddlePostCard } from "../../components/Posts/MiddlePostCard";
import { LittlePostCard } from "../../components/Posts/LittlePostCard";
import { Tabs } from "../../components/Tabs";
import { BookmarkedGrade, PostState, fetchPosts } from "../../redux/posts/posts";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from '../../redux/store'
import { useAppDispatch } from "../../redux/hooks";
import { selectAllPosts } from "../../redux/posts/posts";
import { PostGrade } from "../../redux/posts/posts";
import { ratePost } from "../../redux/posts/posts";
import { handleBookmark } from "../../redux/posts/posts"


export const PostsPage = () => {
const navigate = useNavigate();
const dispatch = useAppDispatch();
const posts = useSelector(selectAllPosts);

console.log("posts:", posts);


const params = useParams();

const handleRateButtonClick = (id: number, grade: PostGrade) => {
    dispatch(ratePost({id, grade}));
};  
 const handleRateBookmarksClick = (id: number, isFavorite: BookmarkedGrade) => {
    dispatch(handleBookmark({id, isFavorite}));
}; 

useEffect(() => {
    dispatch(fetchPosts());
}, [dispatch]);

const [activeTab, setActiveTab] = useState<string>("All");

const filteredPosts = posts.filter((post) => {
    switch(activeTab) {
        case "All":
            return true;
        case "My favorites":
            return post.isFavorite === true ;
        case "Popular":
            return true;
        default: 
            return true;
    }
});

// const [posts, setPosts] = useState<Post[]>([]);
// useEffect(() => {
//     (async () => {
//         const response = await axios.get(
//             "https://studapi.teachmeskills.by/blog/posts/?limit=11&offset=11"
//         );
//         if(Array.isArray(response.data.results)){
//             setPosts(response.data.results);
//         }
//     })();
// }, []); 

const redirectToPostPage = (id: number) => {
    navigate(`/posts/${id}`);
    console.log("В redirectToPostPage")
};

return (
    <div>
        <h1 className={styles.title}>Blog</h1>
        <div className={styles.tabs}><Tabs activeTab={activeTab} setActiveTab={setActiveTab}/></div>

        <div className={styles.post_container}>
            <div className={styles.left_container}>
            {filteredPosts.length !== 0 ? (
                <div>
                    <BigPostCard
                    onClick={() => redirectToPostPage(filteredPosts[0].id)}
                    post={filteredPosts[0]}
                    handleRatePost={ handleRateButtonClick }
                    handleBookmarkedPost={ handleRateBookmarksClick }
                    />
                </div>
                ) : (
                ""
                )}                              

                <div className={styles.middle_container}>
                    {filteredPosts.slice(1, 5).map((post: PostState)  => ( 
                        <div
                            key = {post.id}
                            className={styles.middle}              
                        >
                            <MiddlePostCard
                                onClick={() => redirectToPostPage(post.id)}
                                post={post}
                                handleRatePost={ handleRateButtonClick }
                                handleBookmarkedPost={ handleRateBookmarksClick }
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.right_container}>
                {filteredPosts.slice(6, 11).map((post: PostState)  => ( 
                    <div
                        key = {post.id}
                        className={styles.little}
                    >                           
                        <LittlePostCard
                            onClick={() => redirectToPostPage(post.id)}
                            post={post}
                            handleRatePost={ handleRateButtonClick }
                            handleBookmarkedPost={ handleRateBookmarksClick }                  
                        />                           
                    </div>
                ))}
            </div>
        </div>
    </div>
)}
