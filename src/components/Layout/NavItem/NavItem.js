import React from 'react';
import * as classes from './NavItem.module.css';

import { NavLink } from 'react-router-dom';

const NavItem = () => {
    return ( 
        <React.Fragment>
            <li> <NavLink className={classes.navlink} to="/portfolio">Portfolio</NavLink></li>
            <li> <NavLink className={classes.navlink} to="/portfolio">Contact Me</NavLink></li>
            <li> <NavLink className={classes.navlink} to="/portfolio">About Me</NavLink></li>
            <li> <NavLink className={classes.navlink} to="/portfolio">Projects</NavLink></li>
        </React.Fragment>
     );
}
 
export default NavItem;