import React from 'react';
import s from './Modal.module.scss'
import Portal from '../Portal/Portal';
import Image from 'next/image';
import close from '../../assets/close.svg'
import {useDispatch} from 'react-redux';
import {setModal} from '../../store/modalSlice';
import {Input} from 'antd';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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
                        <label className={s.fieldName}>Your Name <i className={s.mark}>*</i>
                            <Input rootClassName={'antd-input'} placeholder={'Your Name'}/></label>

                        <label className={s.fieldName}>Your Email <i className={s.mark}>*</i>
                            <Input rootClassName={'antd-input'} placeholder={'Your Email'}/></label>

                        <label className={s.fieldName}>Phone number
                            {/*<Input rootClassName={'antd-input'} placeholder={'Your Phone'} type={'phone'}/></label>*/}
                            <PhoneInput
                                specialLabel={''}
                                country={'us'}
                                value={'+1'}
                                containerStyle={{margin: '16px 0 20px'}}
                                inputClass={s.phoneInput}
                                buttonClass={s.dropFlag}
                                searchClass={s.dropFlag}
                                dropdownClass={s.dropFlag}
                            />
                        </label>


                        <label className={s.fieldName}>Your Message
                            <TextArea placeholder={'Your Message'} className={s.textarea}/></label>

                        <button className={s.btn} type={'submit'}>Submit</button>
                    </form>
                </div>
            </div>
        </Portal>
    )
        ;
};

export default ModalWrapper;