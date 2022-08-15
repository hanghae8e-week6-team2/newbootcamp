
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    post:[],
    error:"",
}

export const getBoot = createAsyncThunk("GET_BOOT",async()=>{
    try{
        const response = await axios.get(`http://localhost:8001/post`);
        return response.data;
       
    }catch(error){
        return error.message;
    }
  
})


export const detailSlice = createSlice({
    name: "post",
    initialState:[],
    reducers : {},
    extraReducers: {
       [getBoot.fulfilled]:(state,{payload})=>[...payload],
     },
    
});
