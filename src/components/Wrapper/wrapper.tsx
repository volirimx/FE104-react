import React from 'react';
import { Header } from '../Header/header'
import styles from './wrapper.module.css'
import { Footer } from '../Footer/footer'
import { Title } from '../Title/title'


interface ForChildren {
    children?: React.ReactNode;
}

export const Wrapper = ({ children }: ForChildren) => {
    return (
        <>
        <div className={styles.wrapper}>
            <Header />
            <Title title='Title'/>
            <div className={styles.content}>
                <div>{children}</div>
            </div>
            <Footer/>

        </div>      
        </>
        
    );
};