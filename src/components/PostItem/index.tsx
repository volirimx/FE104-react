import styles from './index.module.css'
import ReactComponent from '../../assets/like-svgrepo-com.svg'

interface props {
    key: string;
    id: string;
    image: string;
    text: string;
    title: string;
    author: string;
}

export function PostItem({id, image, text, title, author, key} : props) {
    return <div key={key} className={styles.postMenu}>
        <span className={styles.misc}>{id}</span>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.desc}>{text}</div>
        <img className={styles.opinion} src={ReactComponent} alt="" />
        <img className={`${styles.opinion} ${styles.opinion2}`} src={ReactComponent} alt="" />
        <img className={styles.image} src={image} alt="img" />
        <span className={styles.misc}>{author}</span>
    </div>
}