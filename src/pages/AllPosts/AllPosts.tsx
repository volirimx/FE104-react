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
   // const params = useParams;

   useEffect(() => {
      getPosts({
         onSuccess: (data) => {
            setPosts(data);
         },
      });
   }, []); 

   return (
      <>
         <h1 className='mb-[60px]'>Blog</h1>
      
         <Tabs 
         firstName='All' 
         secondName='My favorites' 
         thirdName='Popular'
         changeTab={toggleTab}
         />
      
         <div className='mt-[40px]'>

            <div className={`${tab === 'All' ? null : 'none'} 'w-[100%] flex flex-row flex-wrap gap-[1.4rem]'`}>
               {posts.map(post => 
                  <Post key={post.id} id={post.id} image={post.image} date={post.date} title={post.title}  />
               )}
               {posts.map(post => <div>{post.id}</div>)}
            </div>

            <div className={`${tab === 'My favorites' ? null : 'none'}`}>


            </div>

            <div className={`${tab === 'Popular' ? null : 'none'}`}>


            </div>

         </div>
      </>
   )
}

const changeDateFormat = (date: string) => {
   
}