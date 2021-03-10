import { React } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import userRoutes from '../routes/userRoutes';

const switchRoutes = (
    <Switch>
      {userRoutes.map((prop, key) => {
        if (prop.layout === "/user") {
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
      <Redirect from="/" to="/home" />
    </Switch>
)


const User = () => {
    return (
        <div>
            User Layout Here
            { switchRoutes }
            
        </div>
    )
}

export default User;