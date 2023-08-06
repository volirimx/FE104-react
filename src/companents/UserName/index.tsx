import styles from "./index.module.css"


type UserNameProps = {
 user: string;
};

export const UserName = ({ user }: UserNameProps) => {
 const userName = user.split(' ')

 return (
  <>
   <div className={styles.wrapper}>
    <span className={styles.wrapper_initials}>{`${userName[0][0]}${userName[1][0]}`}</span>
    <span className={styles.wrapper_username}>{`${userName[0]} ${userName[1]}`}</span>
   </div>

  </>
 )
}