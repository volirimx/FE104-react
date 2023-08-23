import styles from './index.module.css';
import { CardFooter } from '../CardFooter/index.tsx';
import { Post } from '../../api/posts/types.ts';

export const CardPostMiddle = ({ date, title, image, id, onClick }: Post) => {
    const dateNew = new Date(date);
    return (
        <div className={styles.container} key={id} onClick={() => onClick(id)}>
            <div className={styles.content} id={id.toString()}>
                <div className={styles.imgContainer}>
                    <img src={image}></img>
                </div>
                <p className={styles.date}>{dateNew.toLocaleDateString()}</p>
                <h4 className={styles.title}>{title}</h4>
                <CardFooter />
            </div>
        </div>
    )
}