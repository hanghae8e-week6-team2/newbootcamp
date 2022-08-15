import { configureStore } from "@reduxjs/toolkit";
import { joinSlice } from "../modules/JoinSlice";
import { MainSlice } from "../modules/MainSlice"

export default configureStore({
    reducer: {
        joinSlice: joinSlice.reducer,
        MainSlice: MainSlice.reducer,
    },
    devTools: process.env.NODE_ENV !== "development",
});
