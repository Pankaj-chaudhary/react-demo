import React from "react";
import { Todo } from "./ToDo";
import { RootState, ToDoDispatch } from "./state/store";
import { useDispatch, useSelector } from "react-redux";
import { ITodo } from "./types";
import { updateToDo } from "./state/todoSlice";

const Todos = () => {  
  const todos = useSelector((state: RootState) => state);
  const dispatch = useDispatch<ToDoDispatch>();  
  const handleUpdateTodo = (id: number) => {
    dispatch(updateToDo(id));
  };
    return (
      <>
        {todos.map((todo: ITodo) => (
          <Todo key={todo.id} updateTodo={handleUpdateTodo} todo={todo} />
        ))}
      </>
    );
  };
  
  export default Todos;