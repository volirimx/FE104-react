import React from 'react';
import { Header } from '../Header/header'
import styles from './template.module.css'
import { Footer } from '../Footer/footer'
import { Title } from '../Title/title'
import { TemplateBody } from '../TemplateBody/templateBody';


interface ForChildren {
    thems: string,
    children?: React.ReactNode;
}


export const Template = ({ thems, children }: ForChildren) => {
    return (
        <>
        <div className={styles.wrapper}>
            <Header />
            <Title title='Title' thems={thems}/>
            <TemplateBody thems={thems}/>
            <div className={styles[`content-${thems}`]}>
                <div>{children}</div>
            </div>
            

            <Footer thems={thems}/>

        </div>      
        </>
        
    );
};