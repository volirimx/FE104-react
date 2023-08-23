import styles from './index.module.css';
import likeIcon from '../../assets/icons/like.png';
import dislikeIcon from '../../assets/icons/dislike.png';
import threePointIcon from '../../assets/icons/threePoints.png';
import savedIcon from '../../assets/icons/saved.svg';

export const CardFooter = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
                <img src={likeIcon}></img>
                <img src={dislikeIcon}></img>
            </div>
            <div className={styles.imgWrapper}>
                <img src={threePointIcon}></img>
                <img src={savedIcon}></img>
            </div>

        </div>
    )
}