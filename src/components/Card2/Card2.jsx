import React from 'react';
import s from './Card2.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import {useDispatch} from 'react-redux';
import {setModal} from '../../store/modalSlice';

const Card2 = (props) => {
    const dispatch = useDispatch()

    const openModal = () => dispatch(setModal(true))

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
                <p className={s.fullLink} onClick={openModal}>
                    {linkName || 'Explore More'}
                    {!disabled && <span className={s.arrow}/>}
                </p>
            </div>
        </div>
    );
};

export default Card2;