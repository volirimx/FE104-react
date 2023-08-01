import styles from './user.module.css' 

type User = {
   userName: string
}

export const User = ({userName}: User) => {
   const initials = getUserInitials({userName});
   return (
         <div className={styles.container}>
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