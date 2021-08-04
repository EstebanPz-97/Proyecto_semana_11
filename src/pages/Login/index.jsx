import './login.scss'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { TextField } from '@material-ui/core';
export const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <div maxWidth="sm" className="container-login">
            <AccountCircleIcon  style={{fontSize:80}}/>
            <form className="validation-login" action>
            <TextField id="standard-basic" label="Correo" type="email" required/>
            <TextField id="standard-basic" label="contraseña" type="password" required/>
            <input type="submit" value="Entrar"/>
            </form>
            </div>
        </div>
    );
};