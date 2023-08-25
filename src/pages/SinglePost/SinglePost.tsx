import { useEffect, useState } from 'react'
import styles from './singlePost.module.css'
import { getPostById } from '../../api/posts/requests'
import { useParams } from 'react-router-dom'
import { Post } from '../../components/APP/Post/Post'


export const SinglePost = () => {
   const { id } = useParams();
   console.log(id);
   
   const [post, setPost] = useState();

   useEffect(() => {
      getPostById({
         onSuccess: (data, id) => {
            setPost(data);
         },
      });
   }, []);
   
   return (
      <Post id={id} image={post.image} title={post.title} date={post.date} />
   )
}