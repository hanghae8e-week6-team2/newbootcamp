//action value값을 api명세표 URL로 바꿔야함
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie, setCookie } from "../../api/cookie";

export const addBoot = createAsyncThunk("ADD_BOOT", async (form) => {
  const response = await axios({
    method: "post",
    url: `http://54.180.95.84/api/post/createPost`,
    headers: {
      authorization: `Bearer ${getCookie("is_login")}`,
    },
    data: form,
    //post 요청 보낼때 data 값 써줌
  });
  console.log(response);
  return response.data;
});

export const getBoot = createAsyncThunk("GET_BOOT", async () => {
  try {
    const response = await axios.get(`http://54.180.95.84/api/post`);
    return response.data.post;
  } catch (error) {
    return error.message;
  }
});

export const bootSlice = createSlice({
  name: "boot",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getBoot.fulfilled]: (state, { payload }) => [...payload],
    [addBoot.fulfilled]: (state, { payload }) => [...state, payload],
  },
});
