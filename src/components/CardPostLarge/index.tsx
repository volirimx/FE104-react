import styles from './index.module.css';
import { CardFooter } from '../CardFooter/index.tsx';
import { Post } from '../../api/posts/types.ts';

export const CardPostLarge = ({ date, title, image, id, description, onRateClick }: Post) => {
    const dateNew = new Date(date);
    return (
        <div className={styles.container}>
            <div className={styles.content} id={id.toString()}>
                <div>
                    <p className={styles.date}>{dateNew.toLocaleDateString()}</p>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={styles.description}>{description}</p>
                </div>
                <div className={styles.imgContainer}>
                    <img src={image}></img>
                </div>
            </div>
            <CardFooter id={id} onRateClick={onRateClick} />
        </div>
    )
}