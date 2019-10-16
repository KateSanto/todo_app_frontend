import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <Header />
      <Intro introParagraph="Hello there" />
      <Intro introParagraph="Wooooo!" />
      <Task taskDescription="Buy some milk" />
      <Task taskDescription="Buy dog food" />
      <Task taskDescription="Buy chocolate" />
      <Task taskDescription="Do homework" />
    </div>
  );
}

export default App;
