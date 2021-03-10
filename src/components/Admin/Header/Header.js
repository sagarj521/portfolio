import React from 'react';
import style from './Header.module.css';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';

const Header = () => {
    return (
        <div className={style.Header}>
            <div className={style.left}>
              
               <IconButton><MenuIcon /></IconButton> 
            </div>            
            <div className={style.right}>
                <AccountCircleIcon />
            </div>
        </div>
    )
}

export default Header;