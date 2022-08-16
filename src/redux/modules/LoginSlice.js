import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie, setCookie } from "../../api/cookie";
import api from "../../api/api";
import jwt_decode from "jwt-decode";

const initialState = {
  loading: false,
  loginDb: [],
  token: "",
  error: "",
};

//! 로그인,  아이디랑 비밀번호 보내기
export const loginDb = createAsyncThunk(
  "post/loginDb",
  async ({ navigate, loginidpw }) => {
    try {
      const response = await axios.post(
        `http://54.180.95.84/api/user/login`,
        loginidpw
      );
      const accessToken = response.data.token;
      console.log(accessToken);
      setCookie("is_login", `${accessToken}`);
      alert("환영합니다.");
      navigate("/");
      return response.data.token;
    } catch (error) {
      alert("잘못된 아이디 또는 비밀번호 입니다.");
      return error.code;
    }
  }
);
//!헤더부분 아이디
export const test = createAsyncThunk("get/test", async (navigate) => {
  try {
    const response = await //api("/post/createPost");
    axios({
      method: "get",
      url: `http://54.180.95.84/api/post/createPost`,
      headers: {
        authorization: `Bearer ${getCookie("is_login")}`,
      },
    });
    console.log(response);
    const loginToken = getCookie("is_login");
    const decoded = jwt_decode(loginToken);
    console.log(decoded);
    return decoded.userId;
  } catch (error) {
    console.log(error.code, error.status);
    return error.status;
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
      //state에 토큰저장
      state.error = "";
    });
    //!rejected시 처리 어떻게 해야할까
    builder.addCase(loginDb.rejected, (state, action) => {
      state.loading = false;
      state.loginDb = [];
      state.error = action.error.message;
    });
    builder.addCase(test.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.error = "";
    });
  },
});

export { loginSlice };
export const loginReducer = loginSlice.reducer;
