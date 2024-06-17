import React from 'react';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes,  } from 'react-router-dom';
import { ReactState } from './ContextWithUseState/ReactState';
import { ReactReducer } from './ContextWithReducer/ReactReducer';
import { Home } from './Home';
import { ReduxState } from './StateWithReduxToolkit/ReduxStateWithToolkit';
import { Compound } from './compound/Compound';
import { LazyImageLoader } from './IntersectionObserver/LazyImageLoader';
import ReportMainPage from './ReportingUI/ReportMainPage';

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
            <Link style={linkStyle} to="/compound-component">React Compound Component</Link>
            <Link style={linkStyle} to="/context-state">React Context (State)</Link>
            <Link style={linkStyle} to="/context-reducer">React Context (Reducer)</Link>
            <Link style={linkStyle} to="/redux-toolkit">Redux State (With Toolkit)</Link>
            <Link style={linkStyle} to="/lazy-loader">Lazy Image Loader</Link>
            <Link style={linkStyle} to="/reporting-ui">Reporting UI</Link>
          </nav>
          <Routes>            
            <Route path="/" element={<Home/>} />
            <Route path="/compound-component" element={<Compound/>} />
            <Route path="/context-state" element={<ReactState/>} />
            <Route path="/context-reducer" element={<ReactReducer/>} />
            <Route path="/redux-toolkit" element={<ReduxState/>} />
            <Route path="/lazy-loader" element={<LazyImageLoader/>} />
            <Route path="/reporting-ui" element={<ReportMainPage/>} />
          </Routes>
        </div>
      </Router>
  );
}
