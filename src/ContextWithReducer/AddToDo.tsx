import React from "react";
import { ITodo, TodoContext } from "./Context";

export const AddTodo: React.FC = () => {
  const { dispatch } = React.useContext(TodoContext)!;
    const [formData, setFormData] = React.useState<ITodo | {}>();
    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
      setFormData({
        ...formData,
        [e.currentTarget.id]: e.currentTarget.value,
      });
    };
    const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
      e.preventDefault();
      dispatch({ type: 'ADD_TODO', payload: formData });
    };
    return (
      <form className="Form" onSubmit={(e) => handleSaveTodo(e, formData)}>
        <div>
          <div>
            <label htmlFor="name">Title</label>
            <input onChange={handleForm} type="text" id="title" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input onChange={handleForm} type="text" id="description" />
          </div>
        </div>
        <button disabled={formData === undefined ? true : false}>Add Todo</button>
      </form>
    );
  };