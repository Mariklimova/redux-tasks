import { createSlice } from '@reduxjs/toolkit'

const sumInp = createSlice({
    name: 'sumInp',
    initialState: { inp_1: '', inp_2: '', result: '' },
    reducers: {
        'getInp_1': (state, data) => {
            return { ...state, inp_1: [data.payload] }
        },
        'getInp_2': (state, data) => {
            return { ...state, inp_2: [data.payload] }
        },
        'resultSumInp': (state) => {
            return { result: +state.inp_1 + +state.inp_2, inp_1: '', inp_2: '' }
        }
    }
});

export const {getInp_1,getInp_2,resultSumInp } = sumInp.actions;
export default sumInp.reducer;