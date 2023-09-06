import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./modelSlice";
import cartReducer from "./cartSlice";
export const store=configureStore({
    reducer:{
        'cart': cartReducer,
        'model': modelReducer
    }
})