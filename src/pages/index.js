import Head from 'next/head'
import Header from '../components/Header/Header';
import s from '../styles/Home.module.scss'
import Greetings from '../components/Greetings/Greetings';
import Services from '../components/Services/Services';
import React, {useEffect} from 'react';
import Partners from '../components/Partners/Partners';
import Image from 'next/image';
import back from '../assets/background.svg'
import ModalWrapper from '../components/Modal/ModalWrapper';
import {useSelector} from 'react-redux';

export default function Home() {

    const isModalActive = useSelector(state => state.modal);
    console.log(isModalActive)

    useEffect(() => {
        isModalActive ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [isModalActive])

    return (
        <>
            <Head>
                <title>LandVille</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={s.content}>
                <Image src={back} alt={`background`} className={s.background}/>
                <Header/>
                <Greetings/>
                <Services/>
                <Partners/>
            </div>
            {isModalActive && <ModalWrapper title={'Contact Us'}/>}
        </>
    )
}
