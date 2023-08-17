import styles from './index.module.css';
import { Header } from "../Header";
import { Body, TemplateTheme } from "../Body"
import { Footer } from '../Footer';

interface ITemplate {
    theme: TemplateTheme;
    title: string;
    content?: React.ReactNode;
}

export const Template = ({ theme, title, content }: ITemplate) => {
    return (
        <div className={`${styles.wrapperTemplate} ${styles[theme]}`}>
            <Header />
            <Body title={title} content={content} />
            <Footer />
        </div>)
}