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
}


export const Template = ({ thems, children }: ForChildren) => {
    return (
        <>
        <div className={`${styles.wrapper} ${styles[thems]}`}>
            <Header />
            {/* <Title title='Sign Up' thems={thems}/> */}
            {/* <Form thems={thems}/> */}
            <Title title='Registration confirmation' thems={thems}/>
            
            <TemplateBody thems={thems} title={`Please activate your account with the activision
            link in the email example@gmail.com. Please check the email`}> 
            
            <Button content='Go to home' mode='primary'/>
            
            
            </TemplateBody>
            <div className={styles[`content-${thems}`]}>
                <div>{children}</div>
            </div>
            

            <Footer thems={thems}/>

        </div>      
        </>
        
    );
};