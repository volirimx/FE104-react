import styles from './footer.module.css'

interface FooterProps {
    thems: string
}

export const Footer = (props: FooterProps ) => {
    return (
        <div className={styles.footer}>
            <div className={`${styles.blockText} ${styles[props.thems]}`}>
                <h4>2023 Blogbio</h4>
                <h4>All rights reserved</h4>
            </div>            
        </div>
    )
} 