import React from 'react';
import s from './Modal.module.scss'
import Portal from '../Portal/Portal';
import Image from 'next/image';
import close from '../../assets/close.svg'

const ModalWrapper = ({isModalOpen, closeModal, title}) => {

    return (
        <Portal>
            <div className={s.container} onClick={closeModal}>
                <div className={s.wrapper} onClick={(e) => e.stopPropagation()}>
                    <h2 className={s.title}>{title}</h2>
                    <Image src={close} alt={'close'} width={12} height={12} className={s.closeBtn} onClick={closeModal}/>
                </div>
            </div>
        </Portal>
    );
};

export default ModalWrapper;