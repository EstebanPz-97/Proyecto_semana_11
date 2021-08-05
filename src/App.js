import { useReducer,useEffect } from 'react';
import { AuthContext } from './Auth/AuthContext';
import { authReducer } from './Auth/authReducer';
import { AppRouter } from './Routers/AppRouter';

const init = () => {
  return JSON.parse (localStorage.getItem('user')) || {
     logged: false
  }
}
export const App = ()=> {
  const [ user, dispatch ] = useReducer(authReducer, {}, init);
  useEffect(() => {
    localStorage.setItem( 'user', JSON.stringify(user) );
}, [user])

    return (
    <div className="App">
      <AuthContext.Provider value ={{user, dispatch }}>
      <AppRouter />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
