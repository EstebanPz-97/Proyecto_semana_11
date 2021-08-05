import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import { Userheader } from "../Components/Userheader";
import {Homepage } from '../pages/Homepage';

export const UserRouter = () => {
     return (   
       <>   
            <Userheader />
        <Switch>
          <Route exact path="/Homepage" component={Homepage}/>
        <Route path="/Register"> 
        </Route>
        <Redirect to='/Homepage' />
        </Switch>

      </>
     );
};