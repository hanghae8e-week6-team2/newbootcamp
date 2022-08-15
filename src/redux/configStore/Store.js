import { configureStore } from "@reduxjs/toolkit";
import { joinSlice } from "../modules/JoinSlice";
import { loginSlice } from "../modules/LoginSlice";

export default configureStore({
  reducer: {
    joinSlice: joinSlice.reducer,
    loginSlice: loginSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "development",
});
