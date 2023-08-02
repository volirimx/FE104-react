import styles from './input.module.css'

export const Input = (props: any) => {
   return (
      <div className={styles.wrapper}>
         <label className={styles.label} htmlFor="input">{props.title}</label>
         <input className={`${styles.input} ${props.error ? styles.inputError : ''}`} type={props.type} placeholder={props.placeholder} disabled={props.disabled} />
         <label className={props.error ? styles.errorLabel : styles.errorLabelHidden} htmlFor="input">Error</label>
      </div>
   )
};
