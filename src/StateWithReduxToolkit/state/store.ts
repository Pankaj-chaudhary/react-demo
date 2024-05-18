import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

 
 export const store = configureStore({
    reducer: todoReducer
  })

export type RootState = ReturnType<typeof store.getState>;
export type ToDoDispatch = typeof store.dispatch;