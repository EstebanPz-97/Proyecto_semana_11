import './navbar.scss';
import { Link } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import InputIcon from '@material-ui/icons/Input';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default function Navbar (props){
    return(
        <div className="navbar">
        <span><Link to="/"><HomeIcon />Home</Link></span>
        <span><Link to="/Login"><InputIcon /> {props.login}</Link></span>                        
        <span><Link to="/Register">{props.register} <PersonAddIcon /> </Link></span>
        <div></div>                 
        </div>
    )

}