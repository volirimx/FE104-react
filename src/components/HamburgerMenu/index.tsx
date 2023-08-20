import { useState } from "react";
import styles from "./index.module.css";
import BurgerIcon from "./burger-icon.png";
import { AboutUser } from "../AboutUser";
import CrossIcon from "./cross.png";
import ActiveSun from "./sun_active.png";
import ActiveMoon from "./moon_active.png";
import DisabledSun from "./sun_disabled.png";
import DisabledMoon from "./moon-disabled.png";
import { Link } from 'react-router-dom';

export const HamburgerMenu = () => {
  const [isUserVisible, setIsUserVisible] = useState<boolean>(false);
  const toggleUserVisibility = () => {
    setIsUserVisible(!isUserVisible);
  };

  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);
  const toggleIsLightTheme = () => {
    setIsLightTheme(!isLightTheme);
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
            <div className={styles.left_sun} onClick={toggleIsLightTheme}>
              <img id={styles.sun} src={isLightTheme ? ActiveSun : DisabledSun}/>
            </div>
            <div className={styles.right_moon} onClick={toggleIsLightTheme}>
              <img id={styles.moon} src={isLightTheme ? DisabledMoon : ActiveMoon}/>
            </div>
          </div>
          <Link to="/signin" className={styles.link}><button className={styles.menu_button}>Sign In</button></Link>
        </div>
        ) }
    </div>
  );
};
