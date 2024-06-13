import { configureStore } from '@reduxjs/toolkit';

import fontSize from "../slice/fontSize";
import counter from '../slice/counter'
import counter2 from '../slice/counter2'
import inpValue from '../slice/inpValue'
import palindrom from '../slice/palindrom'
import swapFlag from '../slice/swapFlag'
import validEmail from '../slice/validEmail'
import sumInp from '../slice/sumInp'
import validPass from '../slice/validPass'
import validPass2 from '../slice/validPass2'
import validPass3 from '../slice/validPass3'
import language from '../slice/language'
import acceptTasks from '../slice/acceptTasks'

const store = configureStore({
    reducer: {
        fontSize: fontSize,
        counter: counter,
        counter2: counter2,
        inpValue: inpValue,
        palindrom,
        swapFlag,
        validEmail,
        sumInp,
        validPass,
        validPass2,
        validPass3,
        language,
        acceptTasks,
    }
});

export default store