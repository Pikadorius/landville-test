import React from 'react';
import s from './Card.module.scss'
import Image from 'next/image';

const Card = (props) => {
    return (
        <div className={s.container}>
            <Image src={props.background} alt={'back'} className={s.backPic}/>
            <p className={s.title}>{props.title}</p>
            <h3 className={s.description}>{props.description}</h3>
        </div>
    );
};

export default Card;