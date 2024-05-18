import React from 'react';
import logo from './logo.svg';
import '../App.css';
import { TodoProvider } from './Context';
import { AddTodo } from './AddToDo';
import Todos from './ToDos';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <TodoProvider>
        <main className='App'>
          <h1>My Todos (Use Context With useReducer)</h1>
          <AddTodo/>
          <Todos />
        </main>
      </TodoProvider>
    </>
  );
}

export const ReactReducer = App;
