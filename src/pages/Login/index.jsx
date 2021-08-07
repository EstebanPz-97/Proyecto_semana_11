import './login.scss'
import { useContext } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Grid, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonAdd from '@material-ui/icons/PersonAdd';
import VpnKey from '@material-ui/icons/VpnKey';
import Facebook from '@material-ui/icons/Facebook';
import GitHub from '@material-ui/icons/GitHub';
import { Button } from '@material-ui/core';
import { AuthContext } from '../../Auth/AuthContext';
import { types } from '../../Types/types';
export const Login = ({history}) => {
    const {dispatch} = useContext(AuthContext)
    const handleLogin = () => {
      dispatch({
        type:types.login,
        payload:{
          name:'Esteban'
        }
      })
        history.replace('/')
        
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <div className="container-login">
            <AccountCircleIcon  style={{fontSize:80}}/>
            <h4>Sign in</h4>
            <Button variant="contained" color="primary" startIcon={<Facebook />} className="boton-social">Log in With Facebook</Button>
            <Button variant="contained" color="secondary" startIcon={<GitHub />} className="boton-social">Log in With Github</Button>
            <form className="validation-login" action="">
            <div className="input-group">
                    <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccountCircleIcon />
                  </Grid>
                  <Grid item>
                    <TextField id="input-with-icon-grid" label="correo" required type="email" />
                  </Grid>
                </Grid></div>
                <div className="input-group">
                    <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <VpnKey />
                  </Grid>
                  <Grid item>
                    <TextField id="input-with-icon-grid" label="contraseña" required type="password" />
                  </Grid>
                </Grid></div>
            <Button variant="contained" type="submit" value="Entrar"/>
            </form>
            <Button variant="contained" color="primary" size="large" disableElevation onClick={handleLogin}>
                login
            </Button>
        <h2><Link to="Register"><PersonAdd /> Registrarse </Link></h2>
            </div>
        </div>
    );
};