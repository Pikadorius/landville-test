import React from 'react';
import s from './Card.module.scss'
import Image from 'next/image';

const Card = (props) => {

    const cardStyle = props.disabled ? `${s.container} ${s.disabled}` : s.container

    return (
        <div className={cardStyle}>
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