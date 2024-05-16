import React from "react";
import { Todo } from "./ToDo";
import { ITodo, TodoContext, TodoContextType } from "./Context";

const Todos = () => {
    const { todos, updateTodo } = React.useContext(TodoContext) as TodoContextType;
    return (
      <>
        {todos.map((todo: ITodo) => (
          <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
        ))}
      </>
    );
  };
  
  export default Todos;