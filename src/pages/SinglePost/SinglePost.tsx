import { useEffect, useState } from 'react'
import styles from './singlePost.module.css'
import { useParams } from 'react-router-dom'
import { Post } from '../../components/APP/Post/Post'
import { forPost } from '../../api/posts/types'
import { useAppDispatch } from '../../redux/hooks'
import { getPostById } from '../../redux/posts/posts'


export const SinglePost = () => {
   const [post, setPost] = useState();
   const { postId } = useParams();   
   const dispatch = useAppDispatch();
   
   useEffect(() => {
      dispatch(
      getPostById({
         onSuccess: (data) => {
            setPost(data);
         },
         id: postId,
      }));
   }, [postId]);
   console.log(post);

   return (
      <>
         {post && <Post id={post.id} image={post.image} title={post.title} date={post.date} />}      
      </>
   )
}