import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie, setCookie } from "../../api/cookie";

const initialState = {
  loading: false,
  loginDb: [],
  isLogin: false,
  token: "",
  error: "",
};

//! 로그인,  아이디랑 비밀번호 보내기
export const loginDb = createAsyncThunk("post/loginDb", async (loginDb) => {
  try {
    const response = await axios.post(
      `http://54.180.95.84/api/user/login`,
      loginDb
    );
    const accessToken = response.data.token;
    setCookie("is_login", `${accessToken}`);
    console.log(response);
    return response.data.token;

    //todo 에러처리를 어떻게 할건지 생각하기
    //todo 콘솔에 에러메시지가 떠도 되는지 .
  } catch (error) {
    console.log(error.code);
    console.log(error.message);
    //alert("잘못된 아이디 또는 비밀번호 입니다.");
    return error;
  }
});
//!!!!!!!!테스트 코드 입니다.
export const test = createAsyncThunk("get/test", async (loginDb) => {
  try {
    const response = await axios({
      method: "get",
      url: `http://54.180.95.84/api/post/createPost`,
      headers: {
        //!authorization에 따옴표 안붙여도 되는지
        authorization: `Bearer ${getCookie("is_login")}`,
      },
    });
    console.log(response);
    return response.data;

    //todo 에러처리를 어떻게 할건지 생각하기
    //todo 콘솔에 에러메시지가 떠도 되는지 .
  } catch (error) {
    console.log(error.code, error.message);
    return error;
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
      state.token = "";
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
