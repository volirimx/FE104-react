import styles from './users.module.css'

interface UserButtonProps {
    firstName: string,
    lastName: string
}

export const UserButton = (props: UserButtonProps) => {
    return (
        <button className={styles.button}
            
        
        >
            <div className={styles.small}>
                {props.firstName.slice(0, 1)}
                {props.lastName.slice(0, 1)}
            </div>
            {props.firstName} {props.lastName}
        </button>

    )
}