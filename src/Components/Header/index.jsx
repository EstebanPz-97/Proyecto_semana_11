import './header.scss';
import Navbar from '../Navbar/';
import { Logo } from '../Logo';

export const Header = () =>{
    return(
        <header className="header-api">
            <Logo />
            <Navbar login="sign in" register="sign up"/>
        </header>
    )

}