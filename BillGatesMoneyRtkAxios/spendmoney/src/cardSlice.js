
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetch=createAsyncThunk("postDatas",async() => {
  const response=await axios.get("http://localhost:3000/cardItems")
  return response.data
})

const initialState = {
  shopItems: [],
  status:"",
  remain: 100000000000,
};

export const cardSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {

    moneyChange: (state, action) => {
      state.shopItems.forEach((item) => {
        if (item.id === action.payload.id) {
          // console.log(action.payload);
          item.quantity = parseInt(action.payload.value);
        }
        
      });
        
      let total = 0;
      state.shopItems.forEach((item) => {
        total += Number(item.price) * Number(item.quantity);
      });
      state.total = total;
      state.remain=100000000000 - Number(state.total)
    }
    
    
  },
  extraReducers:(builder) =>{
    builder.addCase(fetch.pending, (state) => {
      state.status="loading"
      
    })
    builder.addCase(fetch.fulfilled,(state,action)=>{
      state.status="success"
      state.shopItems=action.payload
    })
    builder.addCase(fetch.rejected,(state)=>{
      state.status="success"
    
    })
  }
});

export const { moneyChange } = cardSlice.actions;
export default cardSlice.reducer;
