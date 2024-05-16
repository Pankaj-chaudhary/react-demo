import { ITodo } from "./Context";

export type TodoAction =
| { type: 'ADD_TODO'; payload: ITodo }
| { type: 'UPDATE_TODO'; payload: number };
export const todoReducer = (state: ITodo[], action: TodoAction): ITodo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'UPDATE_TODO':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, status: true } : todo
      );

    default:
      return state;
  }
};