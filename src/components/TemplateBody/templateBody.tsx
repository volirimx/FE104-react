import styles from './templateBody.module.css'

interface TemplateBodyProps {
    thems: string
}

export function TemplateBody (props: TemplateBodyProps) {
    return (
        <div className={ `${styles.container} ${styles[props.thems]}`}>
            Template body
        </div>
    )
} 