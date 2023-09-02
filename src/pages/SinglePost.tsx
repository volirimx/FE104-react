import React, { useState, useEffect } from "react";
import { Post } from "../api/posts/types";
import { getPostById } from "../api/posts/requests";
import { useParams } from "react-router-dom";
import styles from "./singlepost.module.css";
import like from "./like (2).png"
import dislike from "./dislike (1).png"
import bookmarks from "./saved (1).png"

export const SinglePost = () => {
    const { postId } = useParams();
    console.log(postId);
    const [post, setPost] = useState<Post>();

    useEffect(() => {
        const parsedPostId = parseInt(`${postId}`);
        console.log("dnoidboi")
        if (!isNaN(parsedPostId)) { 
            getPostById({
                postId: parsedPostId,
                onSuccess: (data) => {
                    setPost(data);
                },
            });
        }
    }, []);
    
    console.log(post);

    if (!post) return null;
    return (
        <div className={styles.singlepost_page}>
            <div className={styles.title}>
                <p>{post?.author} | {post.date}</p>
                <h1 id={styles.title}>{post?.title}</h1>
            </div>
            <div className={styles.content}>
                <img id={styles.main_image} src={post?.image}/>
                <div>
                    <h3>{post.text}</h3>
                </div>
                <div className={styles.post_buttons}>
                    <div id={styles.grades}>
                        <div id={styles.like}><img src = {like} /></div>
                        <div id={styles.dislike}><img src = {dislike}/></div>    
                    </div>

                <div className={styles.save}>
                    <img src = {bookmarks} id={styles.bookmarks}/>
                    <h3 id={styles.add_text}>Add to favourites</h3>
                </div>
            </div>
            </div>           
        </div>
    );
}
