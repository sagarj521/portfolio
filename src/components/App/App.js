import './App.css';
import { Route, Switch } from 'react-router-dom';
import "../../assets/css/material-dashboard-react.css?v=1.9.0";

import Admin from '../../layout/Admin';
import User from '../../layout/User';
import Login from '../Admin/Login/Login';

function App() {

  return (
    <div className="App">  
    <Switch>
      <Route path="/admin/login" component={ Login } /> 
      <Route path="/admin" component={ Admin } />           
      <Route path="/" component={ User } />
    </Switch>         
    </div>
  );
}

export default App;
