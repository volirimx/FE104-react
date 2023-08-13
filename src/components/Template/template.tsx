import React from 'react';
import { Header } from '../Header/header'
import styles from './template.module.css'
import { Footer } from '../Footer/footer'
import { Title } from '../Title/title'
import { TemplateBody } from '../TemplateBody/templateBody';
import Form from '../Forms/signinForm';
import { Button } from '../Button_primary/button';


interface ForChildren {
    thems: string,
    children?: React.ReactNode;
    title: string;
}


export const Template = ({ thems, children, title }: ForChildren) => {
    return (
        <>
        <div className={`${styles.wrapper} ${styles[thems]}`}>
            <Header />
            <Title title={title} thems={thems}/>
            <div className={styles[`content-${thems}`]}>
                <div>{children}</div>
            </div>
            <Footer thems={thems}/>
        </div>      
        </>
        
    );
};