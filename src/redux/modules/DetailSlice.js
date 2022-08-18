import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie, setCookie } from "../../api/cookie";

// const initialState = {
//     post: [],
//     error: "",
// }

export const getBoot = createAsyncThunk("GET_BOOT", async (bootcampId) => {
  console.log("함수안");
  try {
    const response = await axios.get(`http://54.180.95.84/api/post`);
    //const response = await axios.get(`http://localhost:8001/post`);
    console.log(response.data);
    return response.data.post;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

export const deleteBoot = createAsyncThunk("DELETE_BOOT", async (bootId) => {
  try {
    const response = await axios({
      method: "delete",
      url: `http://54.180.95.84/api/post/${bootId}`,
      headers: {
        authorization: `Bearer ${getCookie("is_login")}`,
      },
      // data:bootId
    });
    console.log(response);
    // const response = await axios.delete(`http://localhost:8001/post/${bootId}`);
    return bootId;
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
    [deleteBoot.fulfilled]: (state, { payload }) =>
      state.filter((list) => list.bootcampId !== payload),
  },
});
