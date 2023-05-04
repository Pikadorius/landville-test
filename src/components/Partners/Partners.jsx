import React from 'react';
import s from './Partners.module.scss'
import Button from '../Button/Button';

const Partners = ({showModal}) => {

    const openModal = () => showModal(true)

    return (
        <section className={s.container}>
            <div className={s.wrapper}>
                <h3 className={s.title}>
                    Partner With Us and Thrive
                </h3>
                <p className={s.description}>
                    Join us to supercharge your real estate endeavors and achieve remarkable outcomes!
                </p>
                <div className={s.btnPlace}>
                    <Button title={'Contact Us'} size={'large'} onClick={openModal}/>
                </div>
            </div>
        </section>
    );
};

export default Partners;