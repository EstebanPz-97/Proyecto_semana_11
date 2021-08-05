import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import { Userheader } from "../Components/Userheader";
import {Homepage } from '../pages/Homepage';
import { Search } from "../pages/Search";

export const UserRouter = () => {
     return (   
       <>   
            <Userheader />
        <Switch>
          <Route exact path="/Homepage" component={Homepage}/>
          <Route exact path="/Search" component={Search} />
        </Switch>

      </>
     );
};