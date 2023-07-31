import styles from './button.css'


interface ButtonProps {
    content: string,
    isActive: boolean
    }

export function Button (props: ButtonProps) {
    return (
        <button className='isBlue'>{props.content}</button>




    )
}