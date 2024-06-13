import { createSlice } from '@reduxjs/toolkit'

const validPass = createSlice({
    name: 'validPass',
    initialState: '',
    reducers: {
        'validationPwd': (_state,data) => data.payload

    }
});

export const { validationPwd } = validPass.actions;
export default validPass.reducer;