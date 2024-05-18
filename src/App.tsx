import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './compound/Tabs';
import { Tab } from './compound/Tab';
import { TodoProvider } from './ContextWithReducer/Context';
import { AddTodo } from './ContextWithReducer/AddToDo';
import Todos from './ContextWithReducer/ToDos';
import { Link, Route, BrowserRouter as Router, Routes,  } from 'react-router-dom';
import { ReactState } from './ContextWithUseState/ReactState';
import { ReactReducer } from './ContextWithReducer/ReactReducer';
import { Home } from './Home';

export const App = () => {
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue'
      };
  return (
    <Router>
        <div>
          <nav>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/context-state">React Context (State)</Link>
            <Link style={linkStyle} to="/context-reducter">React Context (Reducer)</Link>
          </nav>
          <Routes>            
            <Route path="/" element={<Home/>} />
            <Route path="/context-state" element={<ReactState/>} />
            <Route path="/context-reducter" element={<ReactReducer/>} />
          </Routes>
        </div>
      </Router>
  );
}
