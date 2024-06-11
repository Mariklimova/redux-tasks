import { configureStore } from '@reduxjs/toolkit';

import fontSize from "../slice/fontSize";
import counter from '../slice/counter'
import counter2 from '../slice/counter2'
import inpValue from '../slice/inpValue'
import palindrom from '../slice/palindrom'
import swapFlag from '../slice/swapFlag'
import validEmail from '../slice/validEmail'

const store = configureStore({
    reducer: {
        fontSize:fontSize,
        counter:counter,
        counter2:counter2,
        inpValue:inpValue,
        palindrom,
        swapFlag,
        validEmail
    }
});

export default store