import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getReply = createAsyncThunk("GET_REPLY", async (bootcampId) => {
  try {
    const response = await axios.get(`http://localhost:8001/comment`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const addReply = createAsyncThunk("ADD_REPLY", async (newList) => {
  try {
    console.log(newList);
    const response = await axios.post(`http://localhost:8001/comment`, newList);
    console.log(response);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteReply = createAsyncThunk("DELETE_REPLY", async (postId) => {
  try {
    const response = await axios.delete(
      `http://localhost:8001/comment/${postId}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const updateReply = createAsyncThunk(
  "UPDATE_REPLY",
  async ({ bootId, bootData }) => {
    try {
      console.log(bootId);
      const response = await axios.put(
        `http://localhost:8001/comment/${bootId}`
      );
      return { bootId, bootData };
    } catch (error) {
      return error.message;
    }
  }
);

export const replySlice = createSlice({
  name: "REPLY", //state 이름
  initialState: [], //초기값은 무조건 배열형태로 줍시다
  reducers: {}, //
  extraReducers: {
    [getReply.fulfilled]: (state, { payload }) => [...payload],
    [addReply.fulfilled]: (state, { payload }) => [...state, payload],
    [deleteReply.fulfilled]: (state, { payload }) =>
      state.filter((reply) => reply.userIdx !== payload),
    [updateReply.fulfilled]: (state, { payload }) => {
      state = state.map((reply) => {
        if (reply.id === Number(payload.id)) {
          return payload.bootData;
        } else {
          return reply;
        }
      });
    },
  },
});
