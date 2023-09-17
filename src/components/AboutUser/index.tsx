import styles from "./index.module.css";
export const AboutUser = (props : {userName:string}) => {
    return (
        <div className={styles.about_user}>
            <div id={styles.user_icon}>
                <p className={styles.user_initials}>{getUserInitials(props.userName)}</p>
            </div> 
            <h3 className={styles.user_name}>{props.userName}</h3>           
        </div>
    )
}

const getUserInitials = (userName: string) => {
   const arrOfUserName: string[] = userName.split(' ');
   const userInitialsArr: string[] = arrOfUserName.map(word => word[0]);
   const userInitials: string = userInitialsArr.join('')
   return userInitials;
}