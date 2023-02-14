import { configureStore } from "@reduxjs/toolkit";
import todoAsyncReducer from "../feature/todoAsyncSlice";
export const store = configureStore({
    reducer: todoAsyncReducer
})