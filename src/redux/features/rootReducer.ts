import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice"; 

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;
