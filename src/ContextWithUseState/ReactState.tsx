import React from 'react';
import '../App.css';
import Tabs from '../compound/Tabs';
import { Tab } from '../compound/Tab';
import { TodoProvider } from './Context';
import { AddTodo } from './AddToDo';
import Todos from './ToDos';

function App() {
  return (
    <>
      <TodoProvider>
        <main className='App'>
          <h1>My Todos (UseContext With useState)</h1>
          <AddTodo />
          <Todos />
        </main>
      </TodoProvider>
    </>
  );
}

export const ReactState = App;
