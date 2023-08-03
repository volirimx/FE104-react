import styles from './title.module.css'

interface TitleProps {
    title: string;
}

export const Title = (props: TitleProps) => {
    return (
        <div>
            {props.title}
        </div>
    )
}