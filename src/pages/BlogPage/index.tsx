import { Post } from '../../api/posts/types.ts';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { CardPostMiddle } from '../../components/CardPostMiddle/index.tsx';
import { Tabs } from '../../components/Tabs/index.tsx';
import { useState, useEffect } from 'react';
import { CardPostSmall } from '../../components/CardPostSmall/index.tsx';
import { useAppDispatch } from './../../redux/hooks.ts';
import { tabItems } from './../../utils/constants.ts'
import {
    PostGrade,
    fetchPosts,
    ratePost,
  } from "./../../redux/post/post.ts";

export const BlogPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [posts, setPosts] = useState<Post[]>([]);

    const redirectToPost = (id: number) => {
        navigate(`${id}`);
    }    
    const handleRateClick = (id: number, grade: PostGrade) => {
        dispatch(ratePost({id, grade}))
    }    
    useEffect(() => {
         dispatch(fetchPosts());//как установить посты??? 45 домашка
    }, []);
       
    const [selectedTab, setSelectedTab] = useState(tabItems[0].id);
    const handleTabClick = (selectedId: number) => {
        setSelectedTab(selectedId);
    }
    return (
        <div className={styles.container} key={'blogPage'}>
            <h2>Blog</h2>
            <Tabs tabs={tabItems} selectedId={selectedTab} onTabClick={handleTabClick} />
            <div className={styles.postsContainer}>
                <div className={styles.middlePosts}>
                    {posts.filter((post: Post) => post.id % 2 === 0).map((post: Post) => (
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
                            onClick={redirectToPost}
                            onRateClick={handleRateClick} />
                    ))}
                </div>
                <div className={styles.smallPosts}>
                    {posts.filter((post: Post) => !(post.id % 2 === 0)).map((post: Post) => (
                        <CardPostSmall
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
                            onClick={redirectToPost}  
                            onRateClick={handleRateClick} />
                    ))}
                </div>
            </div>
        </div>
    )
}
