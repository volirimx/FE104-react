import { Post } from '../../api/posts/types.ts';
import { getPostById } from '../../api/posts/requests.ts';
import styles from './index.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState<Post>();
    const postId = params.postId; 
    const callbackSetPost = (post: Post|null) => {
        if (!post) return;
        setPost(post);
    }
    useEffect(() => {
        if (!postId) return;
        getPostById({id: parseInt(postId), callback: callbackSetPost });
    }, [postId]);
    
    return (
        <div className={styles.container}>
            <p>{post?.date}</p>
            <div className={styles.centerContainer}>
                <h1>{post?.title}</h1>
                <div className={styles.imageContainer}>
                    <img src={post?.image}></img>
                </div>
                <p>{post?.description}</p>
            </div>
        </div>
    )
}