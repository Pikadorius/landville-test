import React from 'react';
import s from './Card.module.scss'
import Image from 'next/image';
import arrow from '../../assets/arrow.svg'

const Card = (props) => {
    return (
        <div className={s.container}>
            <Image src={props.background} alt={'back'} className={s.backPic}/>
            <p className={s.title}>{props.title}</p>
            <h3 className={s.description}>{props.description}</h3>
            <div className={s.link}>
                <a href={props.link}>
                    {props.linkName || 'Explore More'}
                </a>
                {!props.noArrow &&  <span className={s.arrow} />}
            </div>
        </div>
    );
};

export default Card;