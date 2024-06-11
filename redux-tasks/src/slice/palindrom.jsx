import { createSlice } from '@reduxjs/toolkit'

const palindrom = createSlice({
    name: 'palindrom',
    initialState: '',
    reducers: {
        'checkValue': (state, data) => data.payload

    }
});

export const { checkValue } = palindrom.actions;
export default palindrom.reducer;