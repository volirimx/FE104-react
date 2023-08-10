
import styles from './index.module.css';

type InputType = 'text' | 'email' | 'password';
interface Input {
    name: string;
    value: string | number;
    inputType: InputType;
    placeHolder?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

export const Input = ({ name, value, inputType, placeHolder = '', disabled = false, onChange }: Input) => {
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.inputLabel}>{name}</label>
            <input className={styles.input} type={inputType} placeholder={placeHolder} disabled={disabled} value={value} onChange={onChange} />
        </div>
    )
}