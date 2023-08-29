import styles from "./header.module.css";
import { HamburgerMenu } from "./HamburgerMenu";
import SearchIcon from "./search.png";
import UserIcon from "./user.png";
import Cross from "./cross.png";
import { useState } from "react";
import { AboutUser } from "../AboutUser";

export const Header = () => {
    const [value, setValue] = useState<string>("");
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const [isFocused, setIsFocused] =useState<boolean>(false);
    const toggleIsFocused =  () => {
        setIsFocused(!isFocused);
    }
    const [isUserFocused, setIsUserFocused] =useState<boolean>(false);
    const toggleIsUserFocused =  () => {
        setIsUserFocused(!isUserFocused);
    }
    const clearInput = () => {
        setIsFocused(false);
        setValue("");
    };
    return(
        <div className={styles.header}>
            <HamburgerMenu/>
            <div className={styles.input_container}>
                <input 
                placeholder={isFocused ? "Search..." : ""}
                onChange={handleInputChange}
                onClick={toggleIsFocused}
                /> 
                {isFocused && 
                <div className={styles.cross_button}>
                    <img id={styles.cross} src={Cross} onClick={ clearInput }/>
                </div>}
            </div>             
            <div className={styles.search} onClick={toggleIsFocused}>
                <img src={SearchIcon} id={styles.search_icon}/>
            </div>    
            <div className={isUserFocused ? "" : styles.user} onClick={toggleIsUserFocused}>
                {isUserFocused && 
                <div>
                    <AboutUser userName="Ulik Sinya"/>
                </div>}
                {!isUserFocused &&
                <img src={UserIcon} id={styles.user_icon} />}                
            </div>        
        </div>
    )
}