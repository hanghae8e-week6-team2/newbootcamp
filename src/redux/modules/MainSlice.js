
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    post:[],
    error:"",
}

export const getBoot = createAsyncThunk("GET_BOOT",async(bootcampId)=>{
    try{
        const response = await axios.get(`54.180.95.84/api/post/:${bootcampId}`);
        return response.data;
       
    }catch(error){
        return error.message;
    }
  
})


export const replySlice = createSlice({
    name: "REPLY",
    initialState,
    reducers : {},
    extraReducers: {
       [getBoot.fulfilled]:(state,{payload})=>[...payload],
     },
    
});
