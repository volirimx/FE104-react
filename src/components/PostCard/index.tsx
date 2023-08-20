import Leha from "./leha.jpg";
import Zhenya from "./zhenya.jpg";
import styles from "./postcard.module.css"
import like from "./like (2).png";
import dislike from "./dislike (1).png";
import bookmarks from "./saved (1).png";
import menu from "./option.png";
interface IPostCard{
    id: number;
    image?:string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    author: number;
}
export const PostCard = ({id, image, text, date, title} : IPostCard) => {
return(<div className={styles.post_container}>
            <div className={styles.content_container}>            
                <div className={styles.post_info}>
                    <p id={styles.post_date}>{date}</p>
                    <h1 id={styles.post_title}>{title}</h1>
                    <h3 id={styles.post_text}>{text}</h3>                
                </div>
                <div className={styles.post_image}>
                    <img src={Zhenya} className={styles.image_full_width}/>
                </div>            
            </div>
            <div className={styles.post_buttons}>
                <div>
                    <img src = {like} id={styles.like}/>
                    <img src = {dislike} id={styles.dislike}/>
                </div>
                <div>
                    <img src = {bookmarks} id={styles.bookmarks}/>
                    <img src = {menu} id={styles.menu}/>
                </div>
            </div>
            <div className={styles.post_line}></div>
        </div>
        )
}