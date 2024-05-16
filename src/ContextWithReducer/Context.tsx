import React from "react";
import { TodoAction, todoReducer } from "./Reducer";

export interface ITodo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

export const TodoContext = React.createContext<{
  todos: ITodo[];
  dispatch: React.Dispatch<TodoAction>;
} | null>(null);
export const TodoProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [todos, dispatch] = React.useReducer(todoReducer, [
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
  ]);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}