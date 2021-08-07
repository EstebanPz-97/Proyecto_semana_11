import './headerUser.scss';
import { Logo } from '../Logo';
import {Navbaruser} from '../Navbaruser';
import { Hero } from '../Hero';
import { useState } from 'react';

export const Userheader = () =>{
    const [show, setshow] = useState (false);

    window.onscroll = () =>{
        setshow(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    }
    return(
        <header >
            <div className={show ? "header-user bg-white":"header-user " }><Logo />
            <Navbaruser login="logout"/></div>
            <Hero />

        </header>
    )

};