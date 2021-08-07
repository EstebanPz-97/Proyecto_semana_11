import Imglogo from './logo.png'
import './logo.scss'
import { Link  } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import Search from '@material-ui/icons/Search';
import Info from '@material-ui/icons/Info'
export const Logo = () =>{
    return(
        <div className="logo-nav">
        <img src={Imglogo} alt="Logo" className="logo_app"/>
        <span><Link to="/"><HomeIcon />Home</Link></span>
        <span><Link to="/Search"><Search />Search</Link></span>
        <span><Link to="/Table"><Info /> About</Link></span>
        </div>
    )
} 