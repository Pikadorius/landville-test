import React from 'react';
import s from './Button.module.scss'

const Button = (props) => {

    const btnSize = `${s.btn} + ${props.size === 'medium' ? `${s.medium}` : ''}`

    return (
        <button className={btnSize} onClick={props.onClick}>{props.title}</button>
    );
};

export default Button;