import { configureStore } from "@reduxjs/toolkit";
import { MainSlice } from "../modules/MainSlice"

export default configureStore({
    reducer: {
        MainSlice: MainSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== "development",
});
