import React from 'react';
import s from './Button.module.scss'

const Button = ({size, onClick, title}) => {

    const btnSize = `${s.btn} + ${size === 'medium' ? `${s.medium}` : ''}`

    // large medium

    return (
        <button className={btnSize} onClick={onClick}>{title}</button>
    );
};

export default Button;