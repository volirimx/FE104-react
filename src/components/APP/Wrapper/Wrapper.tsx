import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { useContext } from 'react';
import styles from './wrapper.module.css'
import { Template } from '../Template/Template';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectCount } from '../../../redux/counter/counter';

export const Wrapper = () => {
// const themeContext = useContext(ThemeContext)
// id = id={styles[themeContext?.theme]}
// const counter = useAppSelector(selectCount)
// const dispatch = useAppDispatch();

// const handleIncrementClick = () => {
//    dispatch(increment())
// }


// const handleDecrementClick = () => {
//    dispatch(decrement())   
// }
   return (
      <div className={styles.wrapper}>
         {/* <div>{counter}</div> */}
         <Header />
            <div className={styles.container}>
               <Template>
                  <Outlet /> 
               </Template>
            </div>  
         <Footer />
      </div>
   )
}