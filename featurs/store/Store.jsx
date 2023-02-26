import { configureStore } from "@reduxjs/toolkit";
import CartSlice, { getTotals } from "../CartSlice";

export const store = configureStore({
    reducer: {
        cart: CartSlice,
    }
});
store.dispatch(getTotals())