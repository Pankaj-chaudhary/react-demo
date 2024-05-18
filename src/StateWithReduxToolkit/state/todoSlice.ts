import { createSlice } from "@reduxjs/toolkit"
import { ITodo } from "../types";
const initialState: ITodo[] = [
    {
      id: 1,
      title: 'post 1',
      description: 'this is a description',
      status: false,
    },
    {
      id: 2,
      title: 'post 2',
      description: 'this is a description',
      status: true,
    },
  ];

const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      addToDo: (state, action) => {
        return [...state, action.payload]
      },
      updateToDo: (state, action) => {
        return state.map((todo) =>
            todo.id === action.payload ? { ...todo, status: true } : todo
          )
      }
    }
  })
  
  export const { addToDo, updateToDo } = todoSlice.actions

  export default todoSlice.reducer;
 
  