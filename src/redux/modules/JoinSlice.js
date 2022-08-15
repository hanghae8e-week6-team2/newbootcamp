import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  joinData: [],
  id: [],
  error: "",
};

//! post 회원정보 전송
export const addJoin = createAsyncThunk("post/addPost", async (joinData) => {
  try {
    const response = await axios.post(
      `http://54.180.95.84/api/user/signup`,
      joinData
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const joinSlice = createSlice({
  name: "joinData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //! 회원정보 전송
    builder.addCase(addJoin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addJoin.fulfilled, (state, action) => {
      state.loading = false;
      state.joinData = action.payload;
      state.error = "";
    });
    builder.addCase(addJoin.rejected, (state, action) => {
      state.loading = false;
      state.joinData = [];
      state.error = action.error.message;
    });
  },
});

export { joinSlice };
export const joinReducer = joinSlice.reducer;
