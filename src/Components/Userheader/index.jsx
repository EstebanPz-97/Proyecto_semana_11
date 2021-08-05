import './headerUser.scss';
import { Logo } from '../Logo';
import {Navbaruser} from '../Navbaruser';

export const Userheader = () =>{
    return(
        <header className="header-user">
            <Logo />
            <Navbaruser login="logout"/>
        </header>
    )

};