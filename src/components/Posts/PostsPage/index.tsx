import { useNavigate } from "react-router-dom"
import { Post } from "../../../api/posts/types";
import { useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { BigPostCard } from "../BigPostCard";
import styles from "./postspage.module.css";
import {MiddlePostCard } from "../MiddlePostCard";
import { LittlePostCard } from "../LittlePostCard";
import { Title } from "../../Title";
import { Tabs } from "../../Tabs";

export const PostsPage = () => {
const navigate = useNavigate();
const [posts, setPosts] = useState<Post[]>([]);
const params = useParams();
console.log(params);
useEffect(() => {
    (async () => {
        const response = await axios.get(
            "https://studapi.teachmeskills.by/blog/posts/?limit=11&offset=11"
        );
        if(Array.isArray(response.data.results)){
            setPosts(response.data.results);
        }
    })();
}, []); 
console.log(posts);
const redirectToPostPage = (id:number) => {
    navigate(`/posts/${id}`);
    console.log("В redirectToPostPage")
};
return (
    <div>
        <h1 className={styles.title}>Blog</h1>
        <div className={styles.tabs}><Tabs/></div>

        <div className={styles.post_container}>
            <div className={styles.left_container}>
            {posts.length !== 0 ? (
                <div onClick={() => redirectToPostPage(posts[0].id)}>
                    <BigPostCard
                    id={posts[0].id}
                    image={posts[0].image}
                    text={posts[0].text}
                    date={posts[0].date}
                    lesson_num={posts[0].lesson_num}
                    title={posts[0].title}
                    author={posts[0].author}
                    />
                </div>
                ) : (
                ""
                )}                                   
                

                <div className={styles.middle_container}>
                    {posts.slice(1, 5).map((post: Post, index: number)  => ( 
                        <div
                            key = {post.id}
                            onClick={()=>{
                                redirectToPostPage(post.id);
                            }}  
                            className={styles.middle}              
                        >
                            <MiddlePostCard
                                id={post.id}
                                image={post.image}
                                date={post.date}
                                lesson_num={post.lesson_num}
                                title={post.title}
                                author={post.author}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.right_container}>
                {posts.slice(6, 11).map((post: Post)  => ( 
                    <div
                        key = {post.id}
                        onClick={()=>{
                            redirectToPostPage(post.id);
                        }}
                        className={styles.little}
                    >                           
                        <LittlePostCard
                            id={post.id}
                            image={post.image}
                            date={post.date}
                            lesson_num={post.lesson_num}
                            title={post.title}
                            author={post.author}                       
                        />                         
                            
                    </div>
                ))}
            </div>
        </div>
    </div>
)}
