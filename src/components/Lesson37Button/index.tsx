import React, { useState } from 'react';
import styles from "./index.module.css"

type Mode = "Primary" | "Secondary" | "Secondary2"

interface MyButtonProps {
 name: string;
 mode: Mode;
 disabled?: boolean;
 onClick: () => void;
}

const MyButton = (props: MyButtonProps) => {
 const { name, mode, disabled, onClick } = props;

 const classNameButton = {
  Primary: styles.Primary,
  Secondary: styles.Secondary,
  Secondary2: styles.Secondary2,
 }
 const styleMode = classNameButton[mode]
 const styleDisabledButton = disabled ? styles.PrimaryDisabled : styleMode

 return (
  <button type="button"
   className={styleDisabledButton}
   name={name}
   data-mode={mode}
   disabled={disabled}
   onClick={onClick}
  >
   {mode}
  </button >
 );
}

export default MyButton