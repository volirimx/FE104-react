import { useState, ChangeEvent, useEffect } from 'react';
import styles from './burgermenu.module.css'
import image from '..//../assets/pngwing.com.png'
import x_image from '../../assets/x.png'
import { UserButton } from '../Users/userbutton';
import { useSelector } from "react-redux";
import { selectUser } from "..//../redux/user/user";
import { RootState } from "../../redux/store";
import { BsFillSunFill } from "react-icons/Bs";
import { BsFillMoonFill } from "react-icons/Bs";
import { Button } from "..//Button_primary/button";
import { useDispatch } from "react-redux";
import { clearUser } from '../../redux/user/user';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";


export const Burgermenu = () => {
    const [state, setState] = useState(false);
    const buttonBurgerHandler = () => {
        setState(!state);       

    }
    const humbBord = state ? `${styles.border}` : '';
    const hmbClasses = [`${styles.hamburger}`, humbBord]

    const userName = useSelector((state: RootState) => selectUser(state).name);  
    console.log(userName);
    const navigate = useNavigate();   
    const { user, signout } = useAuth();
    const dispatch = useDispatch();
    const eraseUser = () => {
        signout(() => navigate('/', {replace: true}));
        dispatch(clearUser());
      
    }

    const doHome = () => {
       navigate('posts')
    }
    

    return (
      
            <div className={hmbClasses.join(' ')}
                onClick={buttonBurgerHandler}>
                <img className={styles.img} src={state ? x_image : image} alt="" />
                {state ? <div className={styles.burger}>
                    { userName ? <div>
                                    <div>
                                        <UserButton lastName={userName} /> 
                                    </div>
                                    <div className={styles.str}>
                                        <Button content='Home' mode="secondary2" onClick={ doHome }/> 
                                    </div>
                                    <div className={styles.str2}>
                                        <Button content='Add post' mode="secondary2" onClick={ doHome }/> 
                                    </div>
                                                                  
                                   
                                    <div className={styles.empty}></div>
                                    <div className={styles.thems}>                                      
                                        <BsFillSunFill className={styles.icons}/>
                                        <BsFillMoonFill className={styles.icons}/>
                                    </div>
                                    <div className={styles.menu}>
                                        <Button content='Log Out' mode="secondary" onClick={ eraseUser }/>             
                                    </div>


                                </div> : <></>}

                    
                </div> : <></>}
            </div>     

      


    )
}

