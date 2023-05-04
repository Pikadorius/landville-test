import React, {FC, ReactNode} from 'react';
import {createPortal} from 'react-dom';

const Portal = ({children, el}) => {
    el = document.body
    return createPortal(children, el)
};

export default Portal;