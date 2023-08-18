import React, { useContext } from 'react';
import { Header } from '../Header/header'
import styles from './template.module.css'
import { Footer } from '../Footer/footer'
import { Title } from '../Title/title'
import { TemplateBody } from '../TemplateBody/templateBody';
import Form from '../Forms/signinForm';
import { Button } from '../Button_primary/button';
import { UserTheme } from '../Theme/thems';

interface ForChildren {
    thems?: string,
    children?: React.ReactNode;
    title: string;
}



export const Template = ({ thems, children, title }: ForChildren) => {
    const myThem = useContext(UserTheme);
    console.log(myThem);
    
    return (
        <>
        <div className={`${styles.wrapper} ${styles[myThem]}`}>
            <Header />
            {/* <Title title={title} thems={thems}/> */}
            <div className={styles[`content-${myThem}`]}>
                <div>{children}</div>
            </div>
            <Footer thems={myThem}/>
        </div>      
        </>
        
    );
};