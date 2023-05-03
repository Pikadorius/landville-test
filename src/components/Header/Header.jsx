import React from 'react'
import s from './Header.module.scss'
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

const Header = () => {
    return (
        <header className={s.header}>
            <Logo/>
            <nav className={s.links}>
                <a>Our Services</a>
                <a>LandSupplier</a>
                <a>LandVille</a>
            </nav>
            <Button title={'Contact Us'} onClick={()=>alert('CLICK')} size={'medium'}/>
        </header>
    );
};

export default Header;
