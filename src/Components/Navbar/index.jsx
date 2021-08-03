import './navbar.scss';
import { Link } from 'react-router-dom'
export default function Navbar (props){
    return(
        <div className="navbar">
        <span><Link to="/">Home</Link></span>
        <span><Link to="/Login">{props.login}</Link></span>                        
        <span><Link to="/Register">{props.register}</Link></span>                 
        </div>
    )

}