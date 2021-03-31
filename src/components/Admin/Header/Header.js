import React from 'react';
import style from './Header.module.css';

import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const history = useHistory();
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        localStorage.clear();
        setAnchorEl(null);
        history.push('admin/login');
    }

    return (
        <div className={style.Header}>
            <div className={style.left}>
              
               <IconButton><MenuIcon /></IconButton> 
            </div>            
            <div className={style.right}>
                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                    </div>
            </div>
        </div>
    )
}

export default Header;