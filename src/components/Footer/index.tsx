import styles from "./footer.module.css"
export const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.line}></div>
            <div className={styles.footer_content}>
                <div><p>2023 Project</p></div>
                <div><p>Il Ballo Della Vito</p></div>
            </div>
        </div>
    )
}