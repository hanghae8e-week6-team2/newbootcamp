import { configureStore } from "@reduxjs/toolkit";
import { joinSlice } from "../modules/JoinSlice";

export default configureStore({
  reducer: {
    joinSlice: joinSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "development",
});
