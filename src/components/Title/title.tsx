import styles from './title.module.css'

interface TitleProps {
    title: string,
    thems: string
}

export const Title = (props: TitleProps) => {
    return (
        <div className={`${styles.container} ${styles[props.thems]}`}>
            <h4>Back to home</h4>
            <h1>{props.title}</h1>
        </div>
    )
}