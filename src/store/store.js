import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {modalReducer} from './modalSlice';

const reducer = combineReducers({
    modal: modalReducer
})

export const store = configureStore({
    reducer,
})
