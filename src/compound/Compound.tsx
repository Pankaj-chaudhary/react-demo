import React from 'react';
import '../App.css';
import Tabs from '../compound/Tabs';
import { Tab } from '../compound/Tab';

function App() {
  return (
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
    </>
  );
}

export const Compound = App;
