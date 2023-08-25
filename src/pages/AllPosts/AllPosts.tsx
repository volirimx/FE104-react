import { forPost } from '../../api/posts/types'
import styles from './allposts.module.css'
import { useState ,useEffect } from 'react';
import { getPosts } from '../../api/posts/requests';
import { Tabs } from '../../components/UI/Tabs/Tabs';
import { Post } from '../../components/APP/Post/Post';
import { useParams } from 'react-router-dom';

export const Posts = () => {
   const [posts, setPosts] = useState<forPost[]>([]);
   const [tab, toggleTab] = useState<string>('All')
   const params = useParams;

   useEffect(() => {
      getPosts({
         onSuccess: (data) => {
            setPosts(data);
         },
      });
   }, []); 

   return (
      <>
         <h1 className={styles.heading}>Blog</h1>
      
         <Tabs 
         firstName='All' 
         secondName='My favorites' 
         thirdName='Popular'
         changeTab={toggleTab}
         />
      
         <div className={styles.container}>

            <div className={`${tab === 'All' ? null : styles.hidden} ${styles.postsContainer}`}>
               {posts.map(post => 
                  <Post id={post.id} image={post.image} date={post.date} title={post.title}  />
               )}
            </div>

            <div className={`${tab === 'My favorites' ? null : styles.hidden}`}>


            </div>

            <div className={`${tab === 'Popular' ? null : styles.hidden}`}>


            </div>

         </div>
      </>
   )
}

const changeDateFormat = (date: string) => {
   
}