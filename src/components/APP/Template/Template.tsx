import styles from './template.module.css'

interface Template {
   heading?: string;
   children?: React.ReactNode
}

export const Template = ({heading, children}: Template) => {
   return (
      <div className={styles.template}>
         <div className={styles.templateHeader}>
            <div className={styles.home}>Back to home</div>
            <h1 className={styles.heading}>{heading}</h1>   
         </div>
         <div className={styles.templateChildren}>
            {children}
         </div>
      </div>
   )
}