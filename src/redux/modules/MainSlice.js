import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getPostAysnc = createAsyncThunk(
    "post/getPost",
    async (thunkAPI) => {
        try {
            const res = await axios.get(process.env);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


export const MainSlice = createSlice({
    name: "mainData",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPostAysnc.fulfilled, (state, action) => ({
                ...state,
                data: action.payload,
            }))
    },
})

export default MainSlice;