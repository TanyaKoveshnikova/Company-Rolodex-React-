import {configureStore} from "@reduxjs/toolkit";
import companiesReducer from './companies/companies-slice'

export const store = configureStore({
    reducer: {
        companies: companiesReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;