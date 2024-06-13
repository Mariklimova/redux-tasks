import { createSlice } from '@reduxjs/toolkit'

const language = createSlice({
    name: 'language',
    initialState: 'ru',
    reducers: {
        'changeLang': (_state, data) => data.payload
    
    }
});

export const { changeLang } = language.actions;
export default language.reducer;