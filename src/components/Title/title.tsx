import styles from './title.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserTheme } from '../Theme/thems'

interface TitleProps {
    title: string,
}

export const Title = (props: TitleProps) => {
    const myThem = useContext(UserTheme);
    return (
        <div className={`${styles.container} ${styles[myThem]}`}>
            <h4>
                <Link to='/'>Back to home</Link>                
            </h4>
            <h1>{props.title}</h1>
        </div>
    )
}