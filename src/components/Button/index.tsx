import styles from "./index.module.css";
type ButtonMode = "primary"|"secondary"|"tertiary";

interface IButton {
  name: string;
  mode: ButtonMode;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({mode, disabled=false, name, onClick}: IButton) => {  
  //[mode]-чтобы положить переменную
  return (
    //косые ковычки т.к. это строка как например ab ob a
    <button className={`${styles.button} ${styles[mode]}`} 
            disabled={disabled} 
            onClick={onClick}
    >
      {name}
    </button>
  );
}
