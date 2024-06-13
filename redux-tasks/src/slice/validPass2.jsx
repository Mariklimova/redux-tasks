import { createSlice } from '@reduxjs/toolkit'

const validPass2 = createSlice({
    name: 'validPass2',
    initialState: false,
    reducers: {
        'validationPwd': (_state,data) => {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm.test(data.payload)
        }

    }
});

export const { validationPwd } = validPass2.actions;
export default validPass2.reducer;