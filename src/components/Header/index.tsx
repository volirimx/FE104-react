import { Menu } from './../Menu/index.tsx';
import { Search } from './../Search/index.tsx';
import { User } from '../User/index.tsx';
import { UserProfile } from './../UserProfile/index.tsx'
import { useState } from 'react';
import styles from './index.module.css';
import { useNavigate } from 'react-router-dom';
import { NavigatePanel } from '../NavigatePanel';
import { useThemeContext } from '../../context/ThemeContext/index.tsx';


export const Header = () => {
    const navigate = useNavigate();
    const themeContext = useThemeContext();
    const redidectToRegistrationPage = () => {
        navigate('/registration');
    }
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const handleMenuClick = (isOpenMenu: boolean) => {
        if (isOpenMenu)
            setIsOpenMenu(false);
        else
            setIsOpenMenu(true);
    }
    const userInfo: string | null = localStorage.getItem('CurrentUser');
    let name: string = '';
    if (userInfo) {
        const userInfoObj = JSON.parse(userInfo);
        name = userInfoObj.name;
    }
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
                <div className={name.length > 0 ? styles.user : ''}>
                    {!(name.length > 0) ? <UserProfile onClick={redidectToRegistrationPage} /> : <User name={name} />}
                </div>
            </div>
            <div>
                {isOpenMenu ? <NavigatePanel name={name} onLightClick={handleLightClick} onDarkClick={handleDarkClick}/> : null}
            </div>
        </>
    )
}