
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    post:[],
    error:"",
}

export const getReply = createAsyncThunk("GET_REPLY",async()=>{
    try{
        const response = await axios.get(`http://localhost:8001/comment`);
        return response.data;
       
    }catch(error){
        return error.message;
    }
  
})


export const replySlice = createSlice({
    name: "REPLY", //state 이름
    initialState, //초기값은 무조건 배열형태로 줍시다
    reducers : {}, //
    extraReducers: {
       [getReply.fulfilled]:(state,{payload})=>[...payload],
     },
    
});
