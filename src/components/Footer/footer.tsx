import { UserTheme } from '../Theme/thems'
import styles from './footer.module.css'
import { useContext } from 'react'

interface FooterProps {
    thems?: string
}

export const Footer = (props: FooterProps ) => {
    const myThem = useContext(UserTheme)
    return (
        <div className={styles.footer}>
            <div className={`${styles.blockText} ${styles[myThem]}`}>
                <h4>2023 Blogbio</h4>
                <h4>All rights reserved</h4>
            </div>            
        </div>
    )
} 