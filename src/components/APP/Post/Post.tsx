import { redirect, useNavigate, useParams } from 'react-router-dom';
import styles from './post.module.css'

interface renderPost {
   id: number;
   image?: string;
   date: string;
   title: string;
}

export const Post = ({id, image, date, title}: renderPost) => {
   const navigate = useNavigate();
   const params = useParams();
   console.log(params);
   
   return (
      <div key={id} className={styles.post}
      onClick={() => navigate(`/posts/${id}`)}
      >
         <div className={styles.image}>
            <img src={image} />
         </div>
         <div className={styles.date}>{date}</div>
         <div className={styles.title}>{title}</div>

         <div className={styles.buttonsContainer}>
            <button className={styles.likeBtn}>Like</button>
         </div>

      </div>   
   )
} 

// const redirectToPage = (postId: number) => {
//    navigate(`/posts/${postId}`)
// }