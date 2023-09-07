import styles from './index.module.css';
import likeIcon from '../../assets/icons/like.png';
import dislikeIcon from '../../assets/icons/dislike.png';
import threePointIcon from '../../assets/icons/threePoints.png';
import savedIcon from '../../assets/icons/saved.svg';
import { PostGrade } from './../../redux/post/post';

type CardFooterType = {
    id:number;
    likes?: number;
    dislikes?: number;
    onRateClick: (id: number, grade: PostGrade) => void ;
} 

export const CardFooter = ({id, onRateClick, likes, dislikes}: CardFooterType ) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <img src={likeIcon} onClick={() => onRateClick(id, 'liked')}></img>
                {likes && likes > 0 ? <p>{likes}</p> : ''}
                <img src={dislikeIcon} onClick={() => onRateClick(id, 'disliked')}></img>
                {dislikes && dislikes > 0 ? <p>{dislikes}</p> : ''}
            </div>
            <div className={styles.imgWrapper}>
                <img src={threePointIcon}></img>
                <img src={savedIcon}></img>
            </div>
        </div>
    )
}