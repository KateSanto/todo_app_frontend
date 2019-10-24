import React from 'react';
import './index.css';
import Header from './components/Header';
import Newtask from './components/Newtask';
import ActiveTask from './components/ActiveTask';
import CompletedTask from './components/CompletedTask';

class App extends React.Component {

  render() {
    const tasks = [{
      id: 1,
      description: "Buy milk",
      completed: false
    },
    {
      id: 2,
      description: "Fill up laundry detergent",
      completed: false
    },
    {
      id: 3,
      description: "Buy wood shavings",
      completed: false
    }

    ];
    return (
      <div>
        {
          tasks.map(function (task, index) {
            return <activeTask task={task} key={index} />;
          })
        }
      </div>
    );
  }

  render() {
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
}

export default App;
