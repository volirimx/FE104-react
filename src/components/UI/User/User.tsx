import styles from './user.module.css' 

type User = {
   userName: string;
   className?: string; 
}

export const User = ({userName, className}: User) => {
   const initials = getUserInitials({userName});
   return (
      <div className={`${styles.container} ${className}`}>
         <div className={styles.userInitials}>{initials}</div>
         <div className={styles.userName}>{userName}</div>
      </div>
   );
};

const getUserInitials = ({userName}: User) => {
   const arrOfUserName: string[] = userName.split(' ');
   const userInitialsArr: string[] = arrOfUserName.map(word => word[0]);
   const userInitials: string = userInitialsArr.join('')
   return userInitials;
}