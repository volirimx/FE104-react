import styles from './index.module.css'

type ButtonMode = 'Primary' | 'Secondary' | 'Tretiary'

interface props {
    text: string;
    mode: ButtonMode;
    isDisabled: boolean;
}

export function Button({text, isDisabled, mode} : props) {
    return <>
        <button className={`${styles.Button} ${styles[mode]}`} disabled={isDisabled}>{text}</button>
    </>
}