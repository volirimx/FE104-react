import { useState } from "react";
import MenuIcon from "../Svg/Menu";
import CloseIcon from "../Svg/Close";
import styles from "./burgermenu.module.css";

import { useNavigate } from "react-router-dom";

const BurgerMenu = () => {
  const [openState, setOpenState] = useState<boolean>(false);
  const navigate = useNavigate();
  const toggleSetOpenState = () => {
    setOpenState(!openState);
  };

  return (
    <>
      <div onClick={() => toggleSetOpenState()} className={styles.menu}>
        {openState ? <CloseIcon /> : <MenuIcon />}
        <div
          className={styles.openMenu}
          style={{
            left: openState ? "0px" : "-200px",
            background: "lightgray",
          }}
        >
          <div onClick={() => navigate("/")} className={styles.element}>
            Tabs
          </div>
          <div className={styles.element} onClick={() => navigate("/posts")}>
            Posts
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
