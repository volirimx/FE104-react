import { Post } from '../../api/posts/types.ts';

import {  useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './../../redux/hooks.ts';
import {
  PostGrade,
//   fetchPosts,
  ratePost,
  selectPosts,
} from "./../../redux/post/post.ts";
import { CardPostMiddle } from '../../components/CardPostMiddle/index.tsx';

export const PostsPage = () => {
    const navigate = useNavigate();
    const redirectToPost = (id: number) => {
        navigate(`${id}`);
    }
    const posts: Post[] = useAppSelector(selectPosts);
    const dispatch = useAppDispatch();
    const handleRateClick = (id: number, grade: PostGrade) => {
        dispatch(ratePost({id, grade}))
    }
    return (
        <div>
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
                onClick={redirectToPost}
                onRateClick={handleRateClick} 
                likes={post.likes}
                dislikes={post.dislikes}/>
        ))}
        </div>
       
    )

}