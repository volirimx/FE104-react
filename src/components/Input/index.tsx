import React from "react";
import styles from "./input.module.css";

type InputType = "text" | "email" | "password" | "tel";
type InputModeType = "text" | "email" | "tel" | "url";

interface InputProps {
  onChange:(e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  value: string;
  placeholder: string;
  inputTitle: string;
  inputMode: InputModeType;
  inputType: InputType;
  disabled: boolean;
  isValid:boolean;
  errorText: string;
}
export const CustomInput = ({
  onChange,
  value,
  placeholder,
  inputTitle,
  inputMode,
  inputType,
  disabled = false,
  isValid,
  errorText
}: InputProps) => {
  return (
        <div>
          <p>{inputTitle}</p>
          <input
            className={`${value ? styles.active_input : styles.default_input} ${isValid ? '' : styles.error_input}`}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            type={inputType}
            inputMode={inputMode}
          />
          {isValid ? "" : <h3 id={styles.error_text}>{errorText}</h3>}
        </div>
      );
}


