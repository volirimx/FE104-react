import styles from './users.module.css';

interface UserButtonProps {
   lastName: string
}

export const UserButton = (props: UserButtonProps) => {    
    
        return (
            <button className={styles.button}>      
                <div className={styles.small}>
                    {props.lastName.slice(0, 1)}
                </div>
               {props.lastName}
                
            </button>
        );
    } 

