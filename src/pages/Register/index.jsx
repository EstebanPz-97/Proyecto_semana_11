import React from 'react'
import "./register.scss";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Send from '@material-ui/icons/Send';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const currencies=[
    {
        value: 'Hombre',
        label: 'Hombre',
    },
    {
        value:'Mujer',
        label:'Mujer',
    },
    {
        value:'Otro',
        label:'otro',
    },
    {
        value:'Prefiero no decirlo',
        label:'Prefiero no decirlo',
    },
]

export const Register = () => {
    const [currency, setCurrency] = React.useState('hombre');
    const handleChange = (event) => {
        setCurrency(event.target.value);
      };
 return (
    <div className="Registro">
        <h1>Register</h1>
        <form action="" className="form-user">
        <TextField id="outlined-basic" label="Nombre" fullWidth variant="outlined" required type="text"/>
        <TextField id="outlined-basic" label="Apellido" fullWidth variant="outlined" required type="text"/>
        <TextField id="outlined-basic" label="Correo" fullWidth variant="outlined" required type="email" />
        <TextField id="outlined-basic" label="Telefono" fullWidth variant="outlined" required type="number"/>
        <TextField id="outlined-basic" label="Contraseña" fullWidth variant="outlined" required type="password"/>
        <TextField id="outlined-basic" label="Genero" select value={currency} onChange={handleChange} fullWidth variant="outlined" required>
        {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
        variant="contained"
        color="primary"
        endIcon={<Send>send</Send>}
        type="submit"
      >
        Registrarse
      </Button>
        </form>
        <h3>Ya estoy registrado? <Link to="/login">Sign in</Link></h3>

    </div>
 );
};