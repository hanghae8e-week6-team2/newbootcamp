import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = {
//     post: [],
//     error: "",
// }

export const getBoot = createAsyncThunk("GET_BOOT", async () => {
  console.log("함수안");
  try {
    const response = await axios.get(`http://54.180.95.84/api/post`);
    console.log(response.data);
    return response.data.post;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

export const detailSlice = createSlice({
  name: "post",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getBoot.fulfilled]: (state, { payload }) => [...payload],
  },
});
