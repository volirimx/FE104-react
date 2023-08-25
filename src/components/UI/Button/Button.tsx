import styles from './button.module.css';

interface Button {
  mode?: string;
  className?: string
  disabled?: boolean;
  name?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({mode, className, disabled, onClick, name}: Button) => {
  mode = mode ? styles[mode] : '';
  return (
      <button className={`${styles.button} ${mode} ${className}`} disabled={disabled} onClick={onClick}>{name}</button>
  );
}
