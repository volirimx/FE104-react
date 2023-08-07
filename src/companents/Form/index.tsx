import styles from "./index.module.css"
import { useState, ChangeEvent } from "react"



interface Form {
 type: string,
 placeholder: string
 disabled?: boolean
 cals?: string,
 rows?: string
}

export const Form: React.FC<Form> = ({ type, placeholder, disabled }) => {
 const [isValue, setValue] = useState<string>("");


 const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  return setValue(e.target.value)
 }

 return (
  <>
   <input
    className={styles.input}
    type={type}
    value={isValue}
    onChange={handleInputChange}
    placeholder={placeholder}
    disabled={disabled}
   />
  </>
 )


}