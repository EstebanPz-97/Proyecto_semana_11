import './header.scss'
import Navbar from '../Navbar/'

export default function Header (){
    return(
        <header className="header-api">
            
            <Navbar login="sign in" register="sign up"/>
        </header>
    )

}