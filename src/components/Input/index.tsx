import styles from './index.module.css';

type InputType = 'text' | 'email' | 'password';
interface Input {
    id: string;
    name: string;
    value: string | number;
    inputType: InputType;
    placeHolder?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    errorInfo?: string;
    labelName: string;
}

export const Input = ({ id, name, value, inputType, placeHolder = '', disabled = false, onChange, errorInfo = '', labelName }: Input) => {
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.inputLabel} htmlFor={id}>{labelName}</label>
            <input className={`${styles.input} ${errorInfo.length > 0 ? styles.inputError : ''}`} id={id} name={name} type={inputType} placeholder={placeHolder} disabled={disabled} value={value} onChange={onChange} />
            {errorInfo.length > 0 ? <label className={styles.errorLabel}>{errorInfo}</label> : ''}
        </div>
    )
}