import styles from './index.module.css';

export type TemplateTheme = 'white' | 'dark';

interface IBody {
    title: string;
    content: React.ReactNode;
}

export const Body = ({ title, content }: IBody) => {
    return (
        <div className={styles.bodyWrapper}>
            <div className={styles.bodyContent}>
                <div className={styles.headers}>
                    <h5>Back to home</h5>
                    <h2>{title}</h2>
                </div>
                <div className={styles.content}>{content}</div>
            </div>
        </div>
    )

}