import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  post: [],
  error: "",
};

export const getBoot = createAsyncThunk("GET_BOOT", async () => {
  try {
    const response = await axios.get(`http://54.180.95.84/api/post`);
    return response.data.post;
  } catch (error) {
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
