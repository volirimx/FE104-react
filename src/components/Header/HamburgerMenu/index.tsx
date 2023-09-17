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
import { isAuthorized } from "../../../hooks/isAuthorized";
import { useAppSelector } from "../../../redux/hooks";
import { selectUserName } from "../../../redux/user/user";

export const HamburgerMenu = () => {
  const [isUserVisible, setIsUserVisible] = useState<boolean>(false);
  const { type, setType } = useTheme();
  const authorized = isAuthorized();
  const userName = useAppSelector(selectUserName);

  const toggleUserVisibility = () => {
    setIsUserVisible(!isUserVisible);
  };

  const changeTheme = () => {
    setType(type === "Light" ? "Dark" : "Light");
  };

  return (
    <div>
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
            {authorized ? <AboutUser userName={userName}/> : <AboutUser userName="User"/>}
          </div>

          <div className={styles.list}>
            <Link to="/" className={styles.link} style={{ textDecoration: 'none'}}>
              <div className={styles.list_item} onClick={() => { setIsUserVisible(false)}}>              
                  <h2>Home</h2>              
              </div>
            </Link>
            {authorized &&
            <Link to="/" className={styles.link} style={{ textDecoration: 'none'}}>
              <div className={styles.list_item} onClick={() => { setIsUserVisible(false)}}>             
                <h2>Add post</h2>             
              </div>
            </Link>}
          </div>

          <div className={styles.theme}>
            <div className={styles.left_sun} onClick={changeTheme}>
              <img id={styles.sun} src={type==="Light" ? ActiveSun : DisabledSun}/>
            </div>
            <div className={styles.right_moon} onClick={changeTheme}>
              <img id={styles.moon} src={type==="Dark" ? ActiveMoon : DisabledMoon}/>
            </div>
          </div>
          
          {authorized ?  
            <Link to="/" className={styles.link} style={{ textDecoration: 'none'}}>
              <button className={styles.menu_button} onClick={() => { setIsUserVisible(false) }}>              
                Log Out            
              </button>
            </Link>
            : 
            <Link to="/signin" className={styles.link} style={{ textDecoration: 'none'}}>
              <button className={styles.menu_button} onClick={() => { setIsUserVisible(false) }}>              
                Sign In
              </button>
            </Link>
          }
        </div>
      )}
    </div>
  );
};
