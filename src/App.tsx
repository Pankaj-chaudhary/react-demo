import React from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes,  } from 'react-router-dom';
import { ReactState } from './ContextWithUseState/ReactState';
import { ReactReducer } from './ContextWithReducer/ReactReducer';
import { Home } from './Home';
import { ReduxState } from './StateWithReduxToolkit/ReduxStateWithToolkit';

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
            <Link style={linkStyle} to="/context-reducer">React Context (Reducer)</Link>
            <Link style={linkStyle} to="/redux-toolkit">Redux State (With Toolkit)</Link>
          </nav>
          <Routes>            
            <Route path="/" element={<Home/>} />
            <Route path="/context-state" element={<ReactState/>} />
            <Route path="/context-reducer" element={<ReactReducer/>} />
            <Route path="/redux-toolkit" element={<ReduxState/>} />
          </Routes>
        </div>
      </Router>
  );
}
