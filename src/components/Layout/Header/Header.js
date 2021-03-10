import React from 'react';
import * as classes from './Header.module.css';
import Logo from '../../../assets/img/logo.png';
import { Link } from 'react-router-dom';


import SwipeableTemporaryDrawer from '../Drawer/Drawer';
import NavItem from '../NavItem/NavItem';


const Header = ()=> {
    return (
        <div className={classes.header}>
            <div className={classes.header_left}>
                <Link to="/"><img src={Logo} alt="" /></Link>                
            </div>
            <div className={classes.header_right}>
                <ul>
                    <NavItem />                    
                </ul>
            </div>           
            <SwipeableTemporaryDrawer />
        </div>
    )
}

export default Header;