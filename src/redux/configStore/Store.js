import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { joinSlice } from "../modules/JoinSlice";
<<<<<<< HEAD
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
=======
import { loginSlice } from "../modules/LoginSlice";

export default configureStore({
  reducer: {
    joinSlice: joinSlice.reducer,
    loginSlice: loginSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "development",
>>>>>>> origin
});
