import styles from './index.module.css';

export const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.footerWrapper}>
                <p>@ Zhurkevich</p>
                <p>All rights reserved</p>
            </div>
        </div>
    )
}