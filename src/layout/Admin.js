import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import style from './Admin.module.css';

import AdminHeader from '../components/Admin/Header/Header';
import AdminSidebar from '../components/Admin/Sidebar/Sidebar';
import AdminRoutes from '../routes/adminRoutes';



const switchRoutes = (
    <Switch>
      {AdminRoutes.map((prop, key) => {
        if (prop.layout === "/admin") {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
        return null;
      })}
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
);

const Admin = (props) => {

  return (
      <div className={style.admin}>
          <AdminHeader />
          <div className={style.admin_body}>
            <AdminSidebar routes={AdminRoutes} />           
            { switchRoutes }
          </div>          
      </div>
  )
}

export default Admin;