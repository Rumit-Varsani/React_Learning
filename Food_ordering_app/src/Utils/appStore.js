import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./cartSlice";

const appStore = configureStore({
    reducer:{
        cart:sliceReducer,
    },
});

export default appStore;
