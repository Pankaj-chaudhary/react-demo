import React from 'react';
import '../App.css';
import { AddTodo } from './AddToDo';
import Todos from './ToDos';
import { Provider } from 'react-redux';
import { store } from './state/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <main className='App'>
          <h1>My Todos (Redux)</h1>
          <AddTodo />
          <Todos />
        </main>
      </Provider>
    </>
  );
}

export const ReduxState = App;
