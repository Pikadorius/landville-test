import React from 'react';
import s from './Partners.module.scss'
import Button from '../Button/Button';

const Partners = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <h3 className={s.title}>
                    Partner With Us and Thrive
                </h3>
                <p className={s.description}>
                    Join us to supercharge your real estate endeavors and achieve remarkable outcomes!
                </p>
                {/*<button type="button" className="button-contact" onClick={() => toggleMenus()}>*/}
                {/*    Contact Us*/}
                {/*</button>*/}
                <div className={s.btnPlace}>
                    <Button title={'Contact Us'} size={'large'} onClick={() => alert('CLICK')}/>
                </div>
            </div>
        </div>
    );
};

export default Partners;