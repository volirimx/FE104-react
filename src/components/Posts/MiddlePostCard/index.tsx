import styles from "./middlepostcard.module.css";
import Zhenya from "./img/zhenya.jpg";
import like from "./img/like (2).png";
import dislike from "./img/dislike (1).png";
import bookmarks from "./img/saved (1).png";
import menu from "./img/option.png";

interface IPostCard{
    id: number;
    image?:string;
    date: string;
    lesson_num: number;
    title: string;
    author: number;
}
export const MiddlePostCard = ({id, image, date, title} : IPostCard) => {
return(<div className={styles.post_container}>
            <div className={styles.content_container}>          
                <div className={styles.post_image}>
                    <img src={image===null ? Zhenya : image} onLoad={()=>console.log("load img!")} className={styles.image_full_width}/>
                </div>  
                <div className={styles.post_info}>
                    <p id={styles.post_date}>{date}</p>
                    <h1 id={styles.post_title}>{title}</h1>             
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