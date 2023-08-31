import { useState } from "react";
import MenuIcon from "../Svg/Menu";
import CloseIcon from "../Svg/Close";
import styles from "./burgermenu.module.css";
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [openState, setOpenState] = useState<boolean>(false);

  const toggleSetOpenState = () => {
    setOpenState(!openState);
  };
  return (
    <div onClick={() => toggleSetOpenState()} className={styles.menu}>
      {openState ? <CloseIcon /> : <MenuIcon />}
      <div
        className={styles.openMenu}
        style={{
          display: openState ? "flex" : "none",
        }}
      >
        <Avatar
          disableBorderName={false}
          disableBorder={true}
          username="Oskar Nesh"
        />
      </div>
      <div
        className={styles.openMenu2}
        style={{
          display: openState ? "flex" : "none",
        }}
      >
        <Link className={styles.link} to="/">
          Tabs
        </Link>
      </div>
      <div
        className={styles.openMenu3}
        style={{
          display: openState ? "flex" : "none",
        }}
      >
        <Link className={styles.link} to="/posts">
          Posts
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
