import { ChangeEvent, ForwardedRef, forwardRef, useContext } from "react";
import styles from "./input.module.css";
import ContextTheme from "../../ContextTheme";

interface ForInput {
  placeholder: string;
  height?: string | undefined;
  type?: string | undefined;
  id?: string | undefined;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  title?: string;
  border?: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const Input = forwardRef(
  (
    {
      placeholder,
      height,
      type,
      id,
      title,
      value,
      border,
      handleChange,
      onClick,
    }: ForInput,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const { darkMode } = useContext(ContextTheme);
    return (
      <div className={styles.input}>
        <div>{title}</div>
        <input
          ref={ref}
          id={id}
          onChange={handleChange}
          style={{
            height: height,
            border: border,
            background: darkMode ? "darkred" : "white",
            color: "black",
          }}
          onClick={onClick}
          className={styles.inputMain}
          type={type ? type : "text"}
          placeholder={placeholder}
          value={value}
        />
      </div>
    );
  }
);

export default Input;
