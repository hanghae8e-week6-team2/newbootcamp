import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { joinSlice } from "../modules/JoinSlice";
import { loginSlice } from "../modules/LoginSlice";
import { detailSlice } from "../modules/DetailSlice";
import { replySlice } from "../modules/ReplySlice";
import { mainSlice } from "../modules/MainSlice";
import { postSlice } from "../modules/EditSlice";
import { bootSlice } from "../modules/AddSlice";

const reducer = combineReducers({
  joinSlice: joinSlice.reducer,
  detailSlice: detailSlice.reducer,
  replySlice: replySlice.reducer,
  loginSlice: loginSlice.reducer,
  postSlice: postSlice.reducer,
  // mainSlice: mainSlice.reducer,
});

export default configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "development",
});
