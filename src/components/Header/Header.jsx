import React from 'react'
import s from './Header.module.scss'
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import {useDispatch} from 'react-redux';
import {setModal} from '../../store/modalSlice';
import Link from 'next/link';

const Header = () => {

    const dispatch = useDispatch()

    const openModal = () => dispatch(setModal(true))

    return (
        <header className={s.header}>
            <Logo/>
            <nav className={s.links}>
                <a href={'#services'}>Our Services</a>
                <a>LandSupplier</a>
                <a>LandVille</a>
            </nav>
            <Button title={'Contact Us'} onClick={openModal} size={'medium'}/>
        </header>
    );
};

export default Header;
