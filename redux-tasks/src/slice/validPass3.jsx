import { createSlice } from '@reduxjs/toolkit'

const validPass3 = createSlice({
    name: 'validPass3',
    initialState: {
        inp: '', check: false
    },
    reducers: {
        'getInp': (state, data) => {
            return { ...state, inp: data.payload }
        },
        'validationPwd': (state) => {
            return { ...state, check: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm.test(state.inp) }
        }

    }
});

export const { getInp, validationPwd } = validPass3.actions;
export default validPass3.reducer;