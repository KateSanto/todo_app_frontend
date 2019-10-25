import React from 'react';
import './index.css';
import Header from './components/Header';
import Newtask from './components/Newtask';
import activeTask from './components/activeTask';
import completedTask from './components/completedTask';
import Task from './components/Task';


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
        <Newtask Newtask={this.addNewTask} />
        <h2><Header headerDescription="Active tasks" /></h2>
        <activeTask tasks={this.state.tasks} />
        <h2><Header headerDescription="Completed tasks" /></h2>
        <completedTask tasks={this.state.tasks} /> 
      </div>
    );
  }
}

export default App;
