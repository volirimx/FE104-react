import { Header } from '../Header';
import { Footer } from '../Footer';
import { ReactNode } from 'react';
import styles from "./layout.module.css";
import { Outlet } from 'react-router-dom';
interface LayoutProps {
  children: ReactNode;
}
const Layout = () => {
  return (
    <div className="app-container">
      <div className={styles.header}><Header /></div>
      <div className={styles.content}><Outlet /></div>
      <div className={styles.footer}><Footer /></div>
    </div>
  );
};
export default Layout;
