import styles from "./index.module.css"



interface TextArea {
 placeholder: string,
 disabled?: boolean
}


export const TextArea: React.FC<TextArea> = ({ placeholder, disabled }) => {
 return (
  <>
   <textarea
    className={styles.textarea}
    cols={30}
    rows={10}
    placeholder={placeholder}
    disabled={disabled}>
   </textarea>
  </>
 )

}