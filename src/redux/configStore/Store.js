import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { joinSlice } from "../modules/JoinSlice";
import { detailSlice } from "../modules/DetailSlice";
import { replySlice } from "../modules/ReplySlice";


const reducer = combineReducers({
  joinSlice: joinSlice.reducer,
  detailSlice: detailSlice.reducer,
  replySlice: replySlice.reducer
})

export default configureStore({
  reducer,
   devTools: process.env.NODE_ENV !== "development",
});
