import styles from './users.module.css';
import { Button } from "..//Button_primary/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "..//..//hooks/useAuth";


interface UserButtonProps {
    firstName: string,
    lastName: string
}



export const UserButton = (props: UserButtonProps) => {
        
    // const navigate = useNavigate();
   
    // const { signout } = useAuth();
    // const location = useLocation();
    // const fromPage = location.state?.from?.pathname || '/'; 
        
    
    
    return (
        <>
            <button className={styles.button}        
        
        >
            <div className={styles.small}>
                {props.firstName.slice(0, 1)}
                {props.lastName.slice(0, 1)}
            </div>
            {props.firstName} {props.lastName}
        </button>
        {/* <div className={styles.menu}>
            <Button content='Log Out' mode="secondary" onClick={signout(() => navigate('/', {replace: true}))}/>             
        </div>
         */}
    
        
        </>
        
    )
}