import styles from './input.module.css'

interface InputProps {
   className?: string;
   title?: string;
   name?: string;
   type? : string;
   placeholder?: string;
   disabled?: boolean;
   error?: boolean;
   value?: string;
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({className, title, type, name, placeholder, disabled, value, error, onChange}: InputProps) => {
   return (
      <div className={`${styles.wrapper} ${className}`}>
         <label className={styles.label} htmlFor="input">{title}</label>
         <input
            className={`${styles.input} ${error ? styles.inputError : ''}`} 
            name={name}
            type={type} 
            placeholder={placeholder} 
            disabled={disabled} 
            value={value}
            onChange={onChange}
          />
         <label className={error ? styles.errorLabel : styles.errorLabelHidden} htmlFor="input">Error</label>
      </div>
   )
};
