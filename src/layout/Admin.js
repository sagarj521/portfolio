import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import style from './Admin.module.css';

import AdminHeader from '../components/Admin/Header/Header';
import AdminSidebar from '../components/Admin/Sidebar/Sidebar';
import AdminRoutes from '../routes/adminRoutes';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/actions';



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
    </Switch>
);

const Admin = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();
  
  const checkLocalStorageAuth = ()=> {
    
    let token = localStorage.getItem('token');
    if(!token){      
      history.push('/admin/login');
    }
    else{
      const user = {
        loggedInUserId: localStorage.getItem('loggedInUserId'),
        token: localStorage.getItem('token'),
      }
      dispatch(signIn(user));
    }
  }

  return (
      <div className={style.admin}>
        {checkLocalStorageAuth()}
          <AdminHeader />
          <div className={style.admin_body}>
            <AdminSidebar routes={AdminRoutes} />           
            { switchRoutes }
          </div>          
      </div>
  )
}

export default Admin;