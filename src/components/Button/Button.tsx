import styles from "./button.module.css";
import { MouseEvent } from "react";

type ButtonMode = "primary" | "secondary" | "thirty";

interface Button {
  mode: ButtonMode;
  disabled: boolean;
  title: string;
  handleClick: (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
}

const Button = ({ title, mode, disabled = false, handleClick }: Button) => {
  return (
    <div>
      <button
        onClick={(e) => handleClick(e)}
        className={`${styles.button} ${styles[mode]}`}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
