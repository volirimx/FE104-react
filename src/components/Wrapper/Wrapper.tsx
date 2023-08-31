import { ReactNode, useContext } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./wrapper.module.css";
import ContextTheme from "../../ContextTheme";

interface ForChildren {
  children?: ReactNode;
}

const Wrapper = ({ children }: ForChildren) => {
  const { darkMode } = useContext(ContextTheme);
  return (
    <div
      className={styles.wrapper}
      style={{ background: darkMode ? "grey" : "white" }}
    >
      <Header />
      <div className={styles.children}>{children}</div>
      <Footer />
    </div>
  );
};

export default Wrapper;
