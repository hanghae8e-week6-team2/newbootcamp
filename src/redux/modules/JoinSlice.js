import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  joinData: [],
  error: "",
};
//! get 전체회원정보 가져와서 중복회원있나 확인
export const fetchJoin = createAsyncThunk("post/fetchJoin", async () => {
  try {
    const res = await axios.get(`http://localhost:3001/join`);
    return res.data;
  } catch (error) {
    return error.message;
  }
});
//! post 회원정보 전송
export const addJoin = createAsyncThunk("post/addPost", async (joinData) => {
  try {
    const response = await axios.post(`http://localhost:3001/join`, joinData);
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
    //!보여주기
    builder.addCase(fetchJoin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchJoin.fulfilled, (state, action) => {
      state.loading = false;
      state.joinData = action.payload;
      state.error = "";
    });
    builder.addCase(fetchJoin.rejected, (state, action) => {
      state.loading = false;
      state.joinData = [];
      state.error = action.error.message;
    });
    //!가져오기
    builder.addCase(addJoin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addJoin.fulfilled, (state, action) => {
      state.loading = false;
      state.joinData = [...state.joinData, action.payload];
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
