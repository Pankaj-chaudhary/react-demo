import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './compound/Tabs';
import { Tab } from './compound/Tab';
import { TodoProvider } from './ContextWithReducer/Context';
import { AddTodo } from './ContextWithReducer/AddToDo';
import Todos from './ContextWithReducer/ToDos';

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
          <h1>My Todos (With Reducer)</h1>
          <AddTodo/>
          <Todos />
        </main>
      </TodoProvider>
    </>
  );
}

export const ReactReducer = App;
