import styles from "./index.module.css";

type ButtonMode = 'primary' | 'secondary' | 'tertiary';
interface Button {
    mode: ButtonMode;
    disabled?: boolean;
    content: string;
    onClick?: () => void;
}
export const Button = ({ mode, content, disabled = false, onClick }: Button) => {
    return (
        <div className={styles.buttonWrapper}>
            <button className={`${styles.button} ${styles[mode]}`} disabled={disabled} onClick={onClick}>{content}</button>
        </div>
    );
};