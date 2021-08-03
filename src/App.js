import Header from './Components/Header';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import {Login} from './pages/Login';
import {Register} from './pages/Register';
import { Homepage } from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register"> 
          <Register />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
        </Switch>
      </Router>        
    </div>
  );
}

export default App;
