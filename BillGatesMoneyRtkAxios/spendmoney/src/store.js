import {configureStore} from "@reduxjs/toolkit"
import cardReducer from "./cardSlice"

 export const store=configureStore({
    reducer:{
        shop:cardReducer
    }
    
})
