import React from 'react';
import s from './Modal.module.scss'
import Portal from '../Portal/Portal';
import Image from 'next/image';
import close from '../../assets/close.svg'
import {useDispatch} from 'react-redux';
import {setModal} from '../../store/modalSlice';
import {Input} from 'antd';

const ModalWrapper = ({title}) => {
    const {TextArea} = Input;

    const dispatch = useDispatch()
    const closeModal = () => dispatch(setModal(false))

    return (
        <Portal>
            <div className={s.container} onClick={closeModal}>
                <div className={s.wrapper} onClick={(e) => e.stopPropagation()}>
                    <h2 className={s.title}>{title}</h2>
                    <Image src={close} alt={'close'} width={14} height={14} className={s.closeBtn}
                           onClick={closeModal}/>
                    <form className={s.form}>
                        <p className={s.fieldName}>Your Name <i className={s.mark}>*</i></p>
                        <Input rootClassName={'antd-input'} placeholder={'Your Name'}/>
                        <p className={s.fieldName}>Your Email <i className={s.mark}>*</i></p>
                        <Input rootClassName={'antd-input'} placeholder={'Your Email'}/>
                        <p className={s.fieldName}>Phone number</p>
                        <Input rootClassName={'antd-input'} placeholder={'Your Phone'}/>
                        <p className={s.fieldName}>Your Message</p>
                        <TextArea placeholder={'Your Message'} className={s.textarea}/>
                        <button className={s.btn} type={'submit'}>Submit</button>
                    </form>
                </div>
            </div>
        </Portal>
    )
        ;
};

export default ModalWrapper;