import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styles from './wrapper.module.css'
import { Template } from '../Template/Template';
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectTheme } from '../../../redux/theme/theme';

export const Wrapper = () => {
   const theme = useAppSelector(selectTheme);

   return (
      <body className={`${theme.mode === 'light' ? 'bg-[#f3f3f3]' : 'bg-[#313037]'}`}>
         <div className='flex flex-col'>
            <Header />
               <div className='w-[70%] m-auto mt-[50px]'>
                  <Template>
                     <Outlet /> 
                  </Template>
               </div>  
            <Footer />
         </div> 
      </body>

   )
}