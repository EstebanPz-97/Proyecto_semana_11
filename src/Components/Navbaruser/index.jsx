import './navbaruser.scss';
import { useContext } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AuthContext } from '../../Auth/AuthContext';
import { Button } from '@material-ui/core';
import { types } from '../../Types/types';
import { useHistory } from 'react-router';

export const Navbaruser = (props)=>{

    const {user:{name},dispatch}= useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () =>{
        history.replace('/login')
        dispatch({
            type: types.logout
        }); 
    }

    
    return(
        <div className="navbar-user">
        <span className="user-name">
            {name}
        </span>
        <span><Button  variant="outlined" style={{color:"white"}}
        onClick={ handleLogout }><ExitToAppIcon />{props.login}</Button></span>                        

        
        </div>
    )

}