import { createSlice, createAsyncThunk, isRejected } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../api/cookie";

const url_params = process.env.REACT_APP_url;
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

export const fetchPosts = createAsyncThunk(
  "post/fetchPost",
  async (thunkApi) => {
    try {
      const res = await axios.get(`http://54.180.95.84/api/post`);
      console.log(res);
      return res.data.post;
    } catch (error) {
      return error.message;
    }
  }
);

export const updatePost = createAsyncThunk(
  "put/updatePost",
  async ({ editData, id }) => {
    try {
      const response = await axios({
        method: "put",
        url: `http://54.180.95.84/api/post/${id}`,
        headers: {
          authorization: `Bearer ${getCookie("is_login")}`,
        },
        data: editData,
      });

      return { id, editData };
    } catch (error) {
      return error.message;
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //!보여주기
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
    //!수정하기
    builder.addCase(updatePost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = state.posts.map((post) => {
        if (post.bootcampId === Number(action.payload.id)) {
          return action.payload.logData;
        } else {
          return post;
        }
      });
      state.error = "";
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export { postSlice };
export const postReducer = postSlice.reducer;
