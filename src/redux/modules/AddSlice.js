
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addBoot = createAsyncThunk("ADD_BOOT", async()=>{
    const response = await axios.post("http://localhost:8001/post");
    return response.data;
})


export const  bootSlicer = createSlice({
    name : "boot",
    initialState : [],
    reducers : {},
    extraReducers:{
        [addBoot.fulfilled]:(state,{payload})=>[...state,payload],
    }
})