import styles from './textarea.module.css'

export const Textarea = (props: any) => {
   return (
      <div className={styles.container}>
         <textarea className={styles.textarea} name={props.name} cols={props.cols} rows={props.rows}></textarea>
      </div>
   )
}