import { useState } from "react";
import styles from "./button.module.css";

type ButtonMode = 'primary' | 'secondary' | 'secondary2'

interface ButtonProps {
    content: string,
    mode: ButtonMode,
    onClick: () => void
}

export const Button = (props: ButtonProps) => {
    const [details, setDetails] = useState(false);
    const [over, setOver] = useState(false);
    
    const btnClass = details ? `${styles[`isActive-${props.content}`]}` : `${styles[props.mode]}`;
    const btnOverClass = over ? `${styles[`over-${props.mode}`]}` : ``;
    
    const btnClasses = [`${styles.button}`, btnOverClass, btnClass];

    const handleClick = () => {
        setDetails(prev => !prev); // Обновляем состояние details
        props.onClick(); // Вызываем переданный обработчик клика
    };

    return (
        <button 
            className={btnClasses.join(' ')} 
            onMouseOver={() => setOver(true)} 
            onMouseOut={() => setOver(false)}
            onClick={handleClick}> {/* Используем обновленный обработчик */}
            {props.content}
        </button>
    );
}
