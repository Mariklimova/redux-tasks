import { createSlice } from '@reduxjs/toolkit';

const fontSize = createSlice({
    name: 'fontSize',
    initialState: 20,
    reducers: {
        plusSize: function (state) {
            return state + 1
        },
        minusSize: function (state) {
            return state - 1
        },
    }
});

export const { plusSize, minusSize } = fontSize.actions;
export default fontSize.reducer;