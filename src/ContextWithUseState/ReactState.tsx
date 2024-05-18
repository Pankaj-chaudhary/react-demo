import React from 'react';
import '../App.css';
import Tabs from '../compound/Tabs';
import { Tab } from '../compound/Tab';
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
    <main className='App'>
      <Tabs>
          <Tab label="Tab 1">
            <p>Content for Tab 1</p>
          </Tab>
          <Tab label="Tab 2">
            <p>Content for Tab 2</p>
          </Tab>
          <Tab label="Tab 3">
            <p>Content for Tab 3</p>
          </Tab>
        </Tabs>
      </main>
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
