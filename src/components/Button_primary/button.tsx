import { useState } from "react";
import styles from "./button.module.css";


type ButtonMode = 'primary' | 'secondary' | 'secondary2'


interface ButtonProps {
    content: string,
    mode: ButtonMode,
    
    }

export const Button = (props: ButtonProps) => {
    const [details, setDetails] = useState(false)
    const [over, setOver] = useState(false)
    
     
    const btnClass = details ? `${styles[`isActive-${props.content}`]}` : `${styles[props.mode]}`;
    const btnOverClass = over ? `${styles[`over-${props.content}`]}` : ``;
    
    const btnClasses = [`${styles.button}`, btnOverClass, btnClass]
    return (
        <button 
            className={btnClasses.join(' ')} 
            onMouseOver={()=>setOver(true)} 
            onMouseOut={()=>setOver(false)}
            onClick={() => setDetails(prev => !prev)}>
                      
            {props.content}
        </button>

       
    )
}