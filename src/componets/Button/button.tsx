import styles from './button.module.css';

type ButtonMode = 'primary' | 'secondary' | 'secondary2';

interface Button {
  text: string;
  mode: ButtonMode;
  disabled?: boolean;
  onClick: (...args: any) => any;
}

export const Button = ({ text, mode, disabled, onClick }: Button) => {
  return (
    <button
      className={`${styles.button} ${styles[mode]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
