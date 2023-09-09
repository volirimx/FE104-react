import styles from './index.module.css';
import { getPosts } from '../../api/posts/requests.ts';
import { Post } from '../../api/posts/types.ts';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardPostMiddle } from '../../components/CardPostMiddle/index.tsx';

export const SearchPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const callbackSetPosts = (posts: Post[] | null) =>{
        if (posts)
            setPosts(posts);
    }
    useEffect(() => {
        getPosts({limit: 10, offset: 15, callback: callbackSetPosts});
    }, []);
    const navigate = useNavigate();
    const redirectToPost = (id: number) => {
        navigate(`/posts/${id}`);
    }
    return (
        <div className={styles.container}>
            <h2>Search results '{'Astronauts'}'</h2>
            <div className={styles.middlePosts}>
                    {posts.map((post: Post) => (
                        <CardPostMiddle
                            author={post.author}
                            date={post.date}
                            description={post.description}
                            id={post.id}
                            lesson_num={post.lesson_num}
                            title={post.title}
                            text={post.text}
                            image={post.image}
                            likes={post.likes}
                            dislikes={post.dislikes}
                            onRateClick={()=>{}}
                            onClick={redirectToPost} />
                    ))}
                </div>
        </div>
    )
} 