import React from 'react';
import s from './Card2.module.scss'
import Image from 'next/image';

const Card2 = (props) => {

    const {
        title,
        description,
        background,
        linkPath,
        linkName,
        disabled,
    } = props;

    const cardStyle = disabled ? `${s.container} ${s.disabled}` : s.container

    return (
        <div className={cardStyle}>
            <Image src={background} alt={'back'} className={s.backPic}/>
            <p className={s.title}>{title}</p>
            <h3 className={s.description}>{description}</h3>
            <div className={s.link}>
                <a href={linkPath}>
                    {linkName || 'Explore More'}
                </a>
                {!disabled && <span className={s.arrow}/>}
            </div>
        </div>
    );
};

export default Card2;