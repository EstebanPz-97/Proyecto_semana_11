import { useContext } from "react";
import { BrowserRouter as Router,Switch } from "react-router-dom";

import { AuthContext } from "../Auth/AuthContext";
import { PrivateRoute } from "./PriveRoute";
import { PublicRoute } from "./PublicRoute";

import { Login } from "../pages/Login/index";
import {Register} from "../pages/Register"
import { UserRouter } from "./UserRouter";

export const AppRouter = () => {
  const {user} = useContext(AuthContext)
  console.log(user);
     return (      
        <Router>
          <div> 
            <Switch>
              <PublicRoute 
              exact 
              path="/login" 
              component={Login}
              isAuthenticated={user.logged}/>
              <PublicRoute 
              exact 
              path="/Register" 
              component={Register}
              isAuthenticated={user.logged}/>
            <PrivateRoute path="/" component={UserRouter}
            isAuthenticated={user.logged}/>
          </Switch>
          </div>
      </Router>        
     );
};