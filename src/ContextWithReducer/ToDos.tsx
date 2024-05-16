import React from "react";
import { Todo } from "./ToDo";
import { ITodo, TodoContext } from "./Context";

const Todos = () => {
  const { todos, dispatch } = React.useContext(TodoContext)!;
    return (
      <>
        {todos.map((todo: ITodo) => (
          <Todo key={todo.id} updateTodo={() => dispatch({ type: 'UPDATE_TODO', payload: todo.id })} todo={todo} />
        ))}
      </>
    );
  };
  
  export default Todos;