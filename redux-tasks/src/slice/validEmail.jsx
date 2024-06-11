import { createSlice } from '@reduxjs/toolkit'

const validEmail = createSlice({
    name: 'validEmail',
    initialState: '',
    reducers: {
        'validation': (state,data) => data.payload

    }
});

export const { validation } = validEmail.actions;
export default validEmail.reducer;