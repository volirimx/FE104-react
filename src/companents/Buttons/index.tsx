import styles from "./index.module.css"
import { useState } from "react"

type modeButton = "Primary" | "Secondary" | "Secondary_2"

interface Button {
 name: string,
 mode: modeButton,
 onClick: () => void
}

export const Buttons = (props: Button) => {
 const { name, mode, onClick } = props;
 const [isDisabled, setIsDisabled] = useState(false);

 const handleClick = () => {
  setIsDisabled(true);
  onClick();
 };


 return (
  <>
   <button className={!isDisabled ? `${styles[mode]}` : `${styles[`${mode}_disabled`]}`} disabled={isDisabled} onClick={handleClick}>{name}</button >
  </>
 )


}