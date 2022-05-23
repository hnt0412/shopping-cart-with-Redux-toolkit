import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice'
import modalReducer from './features/modalSlide'
export const store = configureStore({
    reducer: {
        cart:  cartReducer,
        modal: modalReducer,
    },
});