import styles from "./account.module.css";
import { useState } from "react";
import image from "..//..//assets/account_avatar.png";
import x_image from "..//../assets/x.png";
import { UserButton } from "../Users/userbutton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "..//Button_primary/button";
import { useDispatch } from "react-redux";
import { clearUser } from "../../redux/user/user";

export const Account = () => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, signout } = useAuth();

  const buttonClickHandler = () => {
    setState(() => !state);
  };

  const humbBord = state ? `${styles.border}` : "";
  const hmbClasses = [`${styles.hamburger}`, humbBord];

  const eraseUser = () => {
    signout(() => navigate("/", { replace: true }));
    dispatch(clearUser());
  };

  return (
    <div className={styles.container}>
      <div className={hmbClasses.join(" ")} onClick={buttonClickHandler}>
        <img className={styles.img} src={state ? x_image : image} alt="" />
        {state ? (
          <div className={styles.burger}>
            {user && user.name ? (
              <div>
                <UserButton lastName={user.name} /> : null
                <div className={styles.menu}>
                  <Button
                    content="Log Out"
                    mode="secondary"
                    onClick={eraseUser}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
