import { Menu } from './../Menu/index.tsx';
import { Search } from './../Search/index.tsx';
import { UserProfile } from './../UserProfile/index.tsx'
import { useState } from 'react';
import styles from './index.module.css';


export const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const handleMenuClick = (isOpenMenu: boolean) => {
        if (isOpenMenu)
            setIsOpenMenu(false);
        else
            setIsOpenMenu(true);
    }
    return (
        <div className={styles.headerWrapper}>
            <Menu isOpen={isOpenMenu} onMenuClick={handleMenuClick} />
            <Search />
            <UserProfile />
        </div>
    )
}