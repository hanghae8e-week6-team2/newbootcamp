import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getReply = createAsyncThunk("GET_REPLY", async () => {
  try {
    const response = await axios.get(`http://localhost:3001/bootcomment`);
    console.log(response);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const addReply = createAsyncThunk("ADD_REPLY", async (id) => {
  try {
    const response = await axios.post("http://localhost:3001/bootcomment", id);
    console.log(response);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteReply = createAsyncThunk("DELETE_REPLY", async (userIdx) => {
  //   try {
  //     const response = await axios.delete(
  //       `http://localhost:8001/comment/${userIdx}`
  //     );
  //     return response.data;
  //   } catch (error) {
  //     return error.message;
  //   }
});

export const updateReply = createAsyncThunk();
//   "UPDATE_REPLY",
//   async ({ userIdx, userId, content, rating, crateAt }) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:8001/comment/${userIdx}`,
//         { userId: userId, content: content, rating: rating, createAt: crateAt }
//       );
//       return response.data;
//     } catch (error) {
//       return error.message;
//     }
//   }

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
      return state.map((reply) => {
        if (reply.userIdx === payload.userIdx) {
          return {
            ...reply,
            userId: payload.userId,
            content: payload.content,
            rating: payload.rating,
            createAt: payload.crateAt,
          };
        } else {
          return reply;
        }
      });
    },
  },
});
