import React from 'react';
import s from './Logo.module.scss'
import Image from 'next/image'
import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className={s.logoField}>
            <Image src={logo} width={552} height={64} alt={'LandVille Group'}/>
        </div>
    );
};

export default Logo;