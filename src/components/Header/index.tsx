import { Menu } from './../Menu/index.tsx';
import { Search } from './../Search/index.tsx';
import { User } from '../User/index.tsx';
import { UserProfile } from './../UserProfile/index.tsx'
import { useState } from 'react';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { NavigatePanel } from '../NavigatePanel';
import { useThemeContext } from '../../context/ThemeContext/index.tsx';
import { useAppSelector } from '../../redux/hooks.ts';
import { selectUsername } from '../../redux/user/user.ts';


export const Header = () => {
    const navigate = useNavigate();
    const themeContext = useThemeContext();
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const redidectToRegistrationPage = () => {
        navigate('/registration');
    }    
    const handleMenuClick = (isOpenMenu: boolean) => {
        if (isOpenMenu)
            setIsOpenMenu(false);
        else
            setIsOpenMenu(true);
    }
   const username = useAppSelector(selectUsername);
    const handleLightClick = () => {
        if (themeContext.theme !== 'light') 
            themeContext.changeTheme('light')
    }
    const handleDarkClick = () => {
        if (themeContext.theme !== 'dark') 
            themeContext.changeTheme('dark')
    }
    return (
        <>
            <div className={styles.headerWrapper}>
                <Menu isOpen={isOpenMenu} onMenuClick={handleMenuClick} />
                <Search />
                <div className={username.length > 0 ? styles.user : ''}>
                    {!(username.length > 0) ? <UserProfile onClick={redidectToRegistrationPage} /> : <User name={username} />}
                </div>
            </div>
            <div>
                {isOpenMenu ? <NavigatePanel name={username} onLightClick={handleLightClick} onDarkClick={handleDarkClick}/> : null}
            </div>
        </>
    )
}