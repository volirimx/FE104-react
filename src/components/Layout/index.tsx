import styles from './index.module.css';
import { Header } from "../Header";
import { Footer } from '../Footer';
import { Outlet } from 'react-router-dom';
import { useThemeContext } from '../../context/ThemeContext';

export const Layout = () => {
    const themeContext = useThemeContext();
    return (
        <div className={`${styles.layout} ${themeContext.theme === 'light' ? styles.light : styles.dark}`}>
            <Header />
            <div className={styles.contentContainer}>
                <Outlet />
            </div>
            <Footer />
        </div>)
}