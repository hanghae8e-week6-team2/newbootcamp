import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  loginDb: [],
  isLogin: false,
  token: "",
  error: "",
};
let loginToken = "";
//! 로그인,  아이디랑 비밀번호 보내기
//todo islogin을 true로 만들고  토큰을 저장하기
export const loginDb = createAsyncThunk("post/loginDb", async (loginDb) => {
  try {
    const response = await axios.post(`http://localhost:3001/join`, loginDb);
    loginToken = response.headers;
    console.log(loginToken);
    return response.data;
  } catch (error) {
    return error.message;
  }
});
const loginSlice = createSlice({
  name: "loginData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 회원정보 전송시
    builder.addCase(loginDb.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginDb.fulfilled, (state, action) => {
      state.loading = false;
      //!굳이 갖고 있을 필요가 있을까?
      state.loginDb = action.payload;
      state.isLogin = true;
      //state에 토큰저장
      state.token = loginToken;
      //todo response.headers.authorization
      state.error = "";
    });
    //!rejected시 처리 어떻게 해야할까
    builder.addCase(loginDb.rejected, (state, action) => {
      state.loading = false;
      state.joinData = [];
      state.error = action.error.message;
    });
  },
});

export { loginSlice };
export const loginReducer = loginSlice.reducer;
