import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from "../slicers/CounterSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});