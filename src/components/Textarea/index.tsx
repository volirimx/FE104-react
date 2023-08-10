import styles from './index.module.css';

interface Textarea {
    name: string;
    value: string | number;
    placeHolder?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void | undefined;
}
export const Textarea = ({ name, value, placeHolder, disabled = false, onChange }: Textarea) => {
    return (
        <div className={styles.textareaWrapper}>
            <label className={styles.textareaLabel}>{name}</label>
            <textarea className={styles.textarea} placeholder={placeHolder} disabled={disabled} value={value} onChange={onChange} />
        </div>
    )
}