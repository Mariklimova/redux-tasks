import { createSlice } from '@reduxjs/toolkit'

const swapFlag = createSlice({
    name: 'swapFlag',
    initialState: false,
    reducers: {
        'show': () => true,
        'hide': () => false

    }
});

export const { show,hide } = swapFlag.actions;
export default swapFlag.reducer;