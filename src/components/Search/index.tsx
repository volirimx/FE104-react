import searchIcon from '../../assets/icons/search.svg';
import styles from './index.module.css';

export const Search = () => {
    return (
        <>
            <div className={styles.searchWrapper}>
                <input className={styles.searchInput} type='search' />
            </div>
            <div className={styles.searchImgWrapper}>
                <img src={searchIcon}></img>
            </div>
        </>
    )
}