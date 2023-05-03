import React from 'react';
import s from './Greetings.module.scss'

const Greetings = () => {
    return (
        <section className={s.greetings}>
            <h1>Welcome to Landville Group Holdings </h1>
            <div className={s.wrapper}>
                <p>
                Landville Group provides cutting-edge and results-driven tools and services for real estate
                professionals, enabling them to enhance and expand their brands.
                </p>
                <p>
                    Additionally, we offer a comprehensive marketplace solution for buyers to discover exceptional
                    vacant
                    land deals online with ease.
                </p>
            </div>


        </section>
    );
};

export default Greetings;