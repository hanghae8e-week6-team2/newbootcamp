
//action value값을 api명세표 URL로 바꿔야함
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addBoot = createAsyncThunk("ADD_BOOT", async()=>{
    const response = await axios.post("http://localhost:8001/post");
    return response.data;
})


export const getBoot = createAsyncThunk("GET_BOOT",async()=>{
    try{
        const response = await axios.get(`http://localhost:8001/post`);
        return response.data;
       
    }catch(error){
        return error.message;
    }
  
})

export const  bootSlice = createSlice({
    name : "boot",
    initialState : [],
    reducers : {},
    extraReducers:{
        [getBoot.fulfilled]:(state,{payload})=>[...payload],
        [addBoot.fulfilled]:(state,{payload})=>[...state,payload],
    }
})