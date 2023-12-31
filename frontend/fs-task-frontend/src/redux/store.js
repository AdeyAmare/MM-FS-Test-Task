import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import apiReducer from './rapidApiSlice'
import historyReducer from './historySlice'


export const store = configureStore({
    reducer: {
        authReducer: authReducer,
        apiReducer: apiReducer,
        historyReducer: historyReducer
    }
})