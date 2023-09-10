import { useState } from "react";
import styles from "./burgermenu.module.css";
import image from "..//../assets/pngwing.com.png";
import x_image from "../../assets/x.png";
import { UserButton } from "../Users/userbutton";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, addMyPost, clearUser} from "..//../redux/user/user";
import { RootState } from "../../redux/store";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/Bs";
import { Button } from "..//Button_primary/button";
import { changeThemToDark, changeThemToLight } from "../../redux/thems/thems";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { selectUserThem } from "..//../redux/thems/thems";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";


export const Burgermenu = () => {
  const [state, setState] = useState(false);
  const buttonBurgerHandler = () => {
    setState(() => !state);
  };
  const humbBord = state ? `${styles.border}` : "";
  const hmbClasses = [`${styles.hamburger}`, humbBord];

  const userEmail = useAppSelector((state: RootState) => selectUser(state).email);
  console.log(userEmail);
  const accessToken = useAppSelector((state: RootState) => selectUser(state).access);
  console.log(`Получаю токен из стора` + accessToken);
  
  
  const myThem = useAppSelector((state: RootState) => selectUserThem(state));

  const navigate = useNavigate();
  const { user, signout } = useAuth();

  const dispatch = useAppDispatch();

  const eraseUser = () => {
    signout(() => navigate("/", { replace: true }));
    dispatch(clearUser());
  };
  const doHome = () => {
    navigate("mylogin");
  };

  const objectForThunk = {
    accessToken,
    id: 155
  }

  const addPost = () => {
    dispatch(addMyPost(objectForThunk))
  }

  const changeToDark = () => {
    dispatch(changeThemToDark());
  };

  const changeToLight = () => {
    dispatch(changeThemToLight());
  };

  return (
    <div className={hmbClasses.join(" ")} onClick={buttonBurgerHandler}>
      <img className={styles.img} src={state ? x_image : image} alt="" />
      {state ? (
        <div className={styles.burger}>
          {userEmail ? (
            <div>
              <div>
                <UserButton lastName={userEmail} />
              </div>
              <div className={`${styles.str} ${styles[myThem]}`}>
                <Button content="Home" mode="secondary2" onClick={doHome} />
              </div>
              <div className={`${styles.str2} ${styles[myThem]}`}>
                <Button content="Add post" mode="secondary2" onClick={addPost} />
              </div>

              <div className={`${styles.empty} ${styles[myThem]}`}></div>
              <div className={`${styles.thems} ${styles[myThem]}`}>
                <div onClick={changeToLight}>
                  <BsFillSunFill className={styles.icons} />
                </div>
                <div onClick={changeToDark}>
                  <BsFillMoonFill className={styles.icons} />
                </div>
              </div>
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
  );
};
