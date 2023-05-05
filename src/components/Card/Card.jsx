import React from 'react';
import s from './Card.module.scss'
import Image from 'next/image';
import Link from 'next/link';

const Card = (props) => {

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
                {
                    !disabled
                        ? <Link href={linkPath || '#'} target={'_blank'} className={s.fullLink}>
                            {linkName || 'Explore More'}
                            {<span className={s.arrow}/>}
                        </Link>
                        : <div>{linkName}</div>
                }
            </div>
        </div>
    );
};

export default Card;