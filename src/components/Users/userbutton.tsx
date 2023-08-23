import styles from './users.module.css';
import { Button } from "..//Button_primary/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "..//..//hooks/useAuth";


interface UserButtonProps {
    firstName?: string,
    lastName: string
}



export const UserButton = (props: UserButtonProps) => {    
    const navigate = useNavigate();   
    const { user, signout } = useAuth();

    if (user?.name) {
        return (
            <button className={styles.button}>      
                <div className={styles.small}>
                    {props.firstName.slice(0, 1)} {props.lastName.slice(0, 1)}
                </div>
                {props.firstName} {props.lastName}
                <div className={styles.menu}>
                    <Button content='Log Out' mode="secondary" onClick={() => signout(() => navigate('/', {replace: true}))}/>             
                </div>
            </button>
        );
    } else {
        return null; // или верните какое-то сообщение/компонент
    }
}
