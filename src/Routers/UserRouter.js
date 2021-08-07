import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Userheader } from "../Components/Userheader";
import { Detail } from "../pages/Details/index.jsx";
import {Homepage } from '../pages/Homepage';
import {Search} from '../pages/Search/index.jsx'
import { DataTable } from "../pages/Table/index";

export const UserRouter = () => {
     return (   
       <>   
            <Userheader />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Table" component={DataTable} />
          <Route exact path="/Detail/:mal_id" component={Detail} />
        </Switch>

      </>
     );
};