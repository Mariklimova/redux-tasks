import { createSlice } from '@reduxjs/toolkit'

const inpValue = createSlice({
    name: 'inpValue',
    initialState: '',
    reducers: {
        'saveValue': function (state, data) {
            return data.payload;
        }

    }
});

export const { saveValue } = inpValue.actions;
export default inpValue.reducer;