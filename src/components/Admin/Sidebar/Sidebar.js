import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import { Icon } from '@material-ui/core';

import style from './Sidebar.module.css';

const AdminSidebar = (props) => {

  return (
    <List className={style.sidebar}>
    
    {props.routes.map((prop, key) => {
      
      return (
        <NavLink
          to={prop.layout + prop.path}
          className="item"
          activeClassName="active"
          key={key}
        >
          <ListItem button className="item-link">
            {typeof prop.icon === "string" ? (
              <Icon className={style.icon}>
                {prop.icon}
              </Icon>
            ) : (
              <prop.icon
                className="test"
              />
            )}
            <ListItemText
              primary={prop.name}
              className="test"
              disableTypography={true}
            />
          </ListItem>
        </NavLink>
      );
    })}
  </List>     
  );
}

export default AdminSidebar;