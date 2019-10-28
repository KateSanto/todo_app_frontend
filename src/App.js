import React from 'react';
import './index.css';
import Header from './components/Header';
import NewTask from './components/NewTask';
import ActiveTasks from './components/ActiveTasks';
import CompletedTasks from './components/CompletedTasks';
// import Task from './components/Task';


class App extends React.Component {
  state = {
    tasks: [
      // {
    //   id: 1,
    //   description: "Buy milk",
    //   completed: false
    // },
    // {
    //   id: 2,
    //   description: "Fill up laundry detergent",
    //   completed: false
    // },
    // {
    //   id: 3,
    //   description: "Buy wood shavings",
    //   completed: false
    // }

    ]
  };


  addNewTask = (task) => {
    let tasks = this.state.tasks;

    tasks.push(task);

    this.setState({tasks});
  }
  

  render() {
    return (
      <div className="container">
        <h1><Header headerDescription="Get stuff done" /></h1>
        <NewTask addedTask={this.addNewTask} />
        <h2><Header headerDescription="Active tasks" /></h2>
        <ActiveTasks tasks={this.state.tasks} />
        <h2><Header headerDescription="Completed tasks" /></h2>
        <CompletedTasks tasks={this.state.tasks} /> 
      </div>
    );
  }
}

export default App;
