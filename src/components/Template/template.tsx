import { useContext } from "react";
import { Header } from "../Header/header";
import styles from "./template.module.css";
import { Footer } from "../Footer/footer";
import { UserTheme } from "../Theme/thems";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserThem } from "..//../redux/thems/thems";
import { RootState } from "../../redux/store";

export const Layout = () => {
  const myThem = useSelector((state: RootState) => selectUserThem(state));

  return (
    <UserTheme.Provider value={myThem}>
      <InnerLayout />
    </UserTheme.Provider>
  );
};

const InnerLayout = () => {
  const myThem = useContext(UserTheme);

  return (
    <div className={`${styles.wrapper} ${styles[myThem]}`}>
      <Header />
      <div className={styles[`content-${myThem}`]}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
