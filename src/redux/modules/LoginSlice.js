import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  loginData: [],
  error: "",
};
//! get: 아이디중복확인
// export const fetchLogin = createAsyncThunk(
//     "post/fetchLogin",
//     async () => {
//       try {
//         const res = await axios.get(`${url_params}/gaebalog`);
//         return res.data;
//       } catch (error) {
//         return error.message;
//       }
//     }
//   );
//! post: 토큰보내기
// export const addPost = createAsyncThunk("post/addPost", async (logData) => {
//     try {
//       const response = await axios.post(`${url_params}/gaebalog`, logData);
//       return response.data;
//     } catch (error) {
//       return error.message;
//     }
//   });
