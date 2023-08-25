import styles from './footer.module.css'

interface Footer {

};

export const Footer = ({ }) => {
   return (
      <div className={styles.container}>
         <span className={styles.year}>2023 React</span>
         <span className={styles.rights}>All Right Reserved</span>
      </div>
   )
}