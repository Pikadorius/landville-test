import {createSlice} from '@reduxjs/toolkit';

const initialState = false;

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state, action) => {
            return action.payload
        },
    }
})

export const {setModal} = modalSlice.actions
export const modalReducer = modalSlice.reducer