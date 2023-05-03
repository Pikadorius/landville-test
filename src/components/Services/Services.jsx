import React from 'react';
import s from './Services.module.scss';
import first from '../../assets/cards/card1.png'
import second from '../../assets/cards/card2.png'
import third from '../../assets/cards/card3.png'
import fourth from '../../assets/cards/card4.png'
import fifth from '../../assets/cards/card5.png'
import sixth from '../../assets/cards/card6.png'
import seventh from '../../assets/cards/card7.png'
import eighth from '../../assets/cards/card8.png'
import Card from '../Card/Card';

const Services = () => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Our Services</h2>
            <p className={s.description}>Experience the advantages of partnering with our services and elevate your real estate journey</p>
            <div className={s.wrapper}>
                <Card
                    title={'For Investors & Wholesalers'}
                    description={'Investor\'s Gateway to Lucrative Opportunities'}
                    background={first}
                />

                <Card
                    title={'A-to-Z Business Solution'}
                    description={`Launch Your Successful Real Estate Venture \n` +
                    `for Under $300`}
                    background={second}
                />

                <Card
                    title={'Hello'}
                    description={'asdasdasdasd dsad as das das d'}
                    background={third}
                    linkName={'Contact Us'}
                />

                <Card title={'Seeking a Fast Property Sale?'} description={'Effortlessly Sell Your Property and Receive a Direct, Fast Cash Offer with Our Streamlined Process'} background={fourth}/>
                <Card title={'Get a Fantastic Deal'} description={'Search LandSupplier’s Wholesale Property Deals'} background={fifth}/>
                <Card title={'Properties Marketplace'} description={'The Ultimate Platform Connecting Buyers and Sellers'} background={sixth}/>
                <Card title={'Sell for Free'} description={'Begin Marketing Your Property at No Cost and Experience a Seamless Selling Journey'} background={seventh} noArrow={true} linkName={'Coming Soon...'}/>
                <Card title={'Focused Audience Outreach'} description={'Acquire Cost-Effective, Targeted Leads at Unbeatable Prices in The Market'} background={eighth} noArrow={true} linkName={'Coming Soon...'}/>
            </div>
        </div>
    );
};

export default Services;