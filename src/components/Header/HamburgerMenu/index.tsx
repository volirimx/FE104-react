import { useState } from "react";
import styles from "./index.module.css";
import BurgerIcon from "./burger-icon.png";
import { AboutUser } from "../../AboutUser";
import CrossIcon from "./cross.png";
import ActiveSun from "./sun_active.png";
import ActiveMoon from "./moon_active.png";
import DisabledSun from "./sun_disabled.png";
import DisabledMoon from "./moon-disabled.png";
import { Link } from 'react-router-dom';
import { useTheme } from "../../../hooks/useTheme";

export const HamburgerMenu = () => {
  const [isUserVisible, setIsUserVisible] = useState<boolean>(false);
  const toggleUserVisibility = () => {
    setIsUserVisible(!isUserVisible);
  };

  const { type, setType } = useTheme();

  const changeTheme = () => {
    setType(type === "Light" ? "Dark" : "Light");
  };
  
  return (
    <div  >
      <div className={styles.hamb_menu} onClick={toggleUserVisibility}>
        <img
          className={isUserVisible ? styles.cross_icon : styles.burger_icon}
          src={isUserVisible ? CrossIcon : BurgerIcon}
          alt={isUserVisible ? "CloseIcon" : "BurgerIcon"}                  
        />
      </div>
      {isUserVisible && (
        <div className={styles.menu}>
          <div className={styles.about_user_container}>
              <AboutUser userName="Ulik Sinya" />
          </div>
          <ul>
            <li><h2>Menu</h2></li>
          </ul>
          <div className={styles.theme}>
            <div className={styles.left_sun} onClick={changeTheme}>
              <img id={styles.sun} src={type==="Light" ? ActiveSun : DisabledSun}/>
            </div>
            <div className={styles.right_moon} onClick={changeTheme}>
              <img id={styles.moon} src={type==="Dark" ? ActiveMoon : DisabledMoon}/>
            </div>
          </div>
          <Link to="/signin" className={styles.link}><button className={styles.menu_button} onClick={()=>{setIsUserVisible(false)}}>Sign In</button></Link>
        </div>
        ) }
    </div>
  );
};
