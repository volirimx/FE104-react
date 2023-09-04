import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from "./layout.module.css";
import { Outlet} from 'react-router-dom';
import { useTheme } from "../../hooks/useTheme";

const Layout = () => {
  //было const value = useContext(ThemeContext)
  const {type} = useTheme();
  return (
    <div className={type==="Dark" ? styles.layout_dark: styles.layout}>
      <div className={styles.header}><Header /></div>
      <div className={type==="Dark" ? styles.content_dark: styles.content}><Outlet /></div>
      <div className={styles.footer}><Footer /></div>
    </div>
  );
};

export default Layout;
