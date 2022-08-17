
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getBoot = createAsyncThunk("GET_BOOT",async()=>{
//     try{
//         const response = await axios.get(`http://54.180.95.84/api/post`);
//         //const response = await axios.get(`http://localhost:8001/post`);
//         console.log(response);
//         return response.data.post;
       
//     }catch(error){
//         return error.message;
//     }
  
// })


// export const mainSlice = createSlice({
//     name: "POST",
//     initialState:[],
//     reducers : {},
//     extraReducers: {
//        [getBoot.fulfilled]:(state,{payload})=>[...payload],
//      },
    
// });
