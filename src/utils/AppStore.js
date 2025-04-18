import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"

export const AppStore = configureStore({
    reducer:{
        cart : cartReducer,
    },
});