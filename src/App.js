import React from 'react';
import './index.css';
import Header from './components/Header';
import Newtask from './components/Newtask';
import ActiveTask from './components/ActiveTask';
import CompletedTask from './components/CompletedTask';

function App() {
  return (
    <div className="container">
      <h1><Header headerDescription="Get stuff done" /></h1>
      <Newtask />
      <h2><Header headerDescription="Active tasks" /></h2>
      <ActiveTask taskDescription="Buy some milk" />
      <ActiveTask taskDescription="Buy dog food" />
      <ActiveTask taskDescription="Buy chocolate" />
      <ActiveTask taskDescription="Do homework" />
      <h2><Header headerDescription="Completed tasks" /></h2>
      <CompletedTask completedTaskDescription="Buy guinea pig food" />
      <CompletedTask completedTaskDescription="Refill hand soap" />
    </div>
  );
}

export default App;
