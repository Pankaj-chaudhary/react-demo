import React from 'react';
import '../App.css';
import { AddTodo } from './AddToDo';
import Todos from './ToDos';
import { Provider } from 'react-redux';
import { store } from './state/store';

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
      <Provider store={store}>
        <main className='App'>
          <h1>My Todos (Redux With toolkit)</h1>
          <AddTodo />
          <Todos />
        </main>
      </Provider>
    </>
  );
}

export const ReduxState = App;
