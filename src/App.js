import React from 'react';
import './index.css';
import Header from './components/Header';
import NewTask from './components/NewTask';
import ActiveTasks from './components/ActiveTasks';
import CompletedTasks from './components/CompletedTasks';



class App extends React.Component {
  state = {
    tasks: []
  };


  addNewTask = (task) => {
    let tasks = this.state.tasks;

    tasks.push(task);

    this.setState({ tasks });
  }

  deleteTask = (taskId) => {
    let tasks = this.state.tasks;
    let tasksToKeep = tasks.filter(function (task) {
      return task.id !== taskId;

    });
this.setState({tasks: tasksToKeep})
  }

  render() {
    return (
      <div className="container">
        <h1><Header headerDescription="Get stuff done" /></h1>
        <NewTask addedTask={this.addNewTask} />
        <h2><Header headerDescription="Active tasks" /></h2>
        <ActiveTasks tasks={this.state.tasks} deleteTaskFunc={this.deleteTask}/>
        <h2><Header headerDescription="Completed tasks" /></h2>
        <CompletedTasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
