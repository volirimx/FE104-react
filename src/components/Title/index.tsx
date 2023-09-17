import styles from "./title.module.css";
import { useContext } from "react";
import { ThemeContext } from '../../providers/ThemeProvider';
export const Title = ({ titleText }: { titleText: string }) =>{
    const {type} = useContext(ThemeContext);
    return(
        <div className={styles.title_container}>
            <a><h4 className={type==="Dark" ? styles.dark_h4 : styles.h4}>Back to home</h4></a>
            <div><h1 className={type==="Dark" ? styles.dark_h1 : styles.h1}>{titleText}</h1></div>
        </div>
    )
}