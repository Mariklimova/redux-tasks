import { configureStore } from '@reduxjs/toolkit';

import fontSize from "../slice/fontSize";

const store = configureStore({
    reducer: {
        fontSize: fontSize
    }
});

export default store