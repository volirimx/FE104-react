import styles from './users.module.css';

interface UserButtonProps {
   lastName: string
}

export const UserButton = (props: UserButtonProps) => {    
    const commaIndex = props.lastName.indexOf("@");
    const part = props.lastName.substring(0, commaIndex);
        return (
            <button className={styles.button}>      
                <div className={styles.small}>
                    {props.lastName.slice(0, 1)}
                </div>
               {part}
                
            </button>
        );
    } 

