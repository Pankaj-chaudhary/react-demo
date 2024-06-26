import React from "react";
import { ITodo } from "./Context";

type Props = {
    todo: ITodo;
    updateTodo: (id: number) => void;
  };
  
export const Todo: React.FC<Props> = ({ todo, updateTodo }) => {
    const checkTodo: string = todo.status ? `line-through` : '';
    return (
      <div className="Card">
        <div className="Card--text">
          <h1 className={checkTodo}>{todo.title}</h1>
          <span className={checkTodo}>{todo.description}</span>
        </div>
        <button onClick={() => updateTodo(todo.id)} className={todo.status ? `hide-button` : 'Card--button'}>
          Complete
        </button>
      </div>
    );
  };