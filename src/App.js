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
    this.setState({ tasks: tasksToKeep })
  }

  markTaskAsCompleted = (taskId) => {
    const updatedTasks = this.state.tasks.map(function (task) {
      if (task.id === taskId) {
        task.completed = true
      }
      return task
    });

    this.setState({ tasks: updatedTasks })
  }

  markTaskAsActive = (taskId) => {
    const activeTasks = this.state.tasks.map(function (task) {
      if (task.id === taskId) {
        task.completed = false
      }
      return task
    });
    this.setState({ tasks: activeTasks })
  }

  render() {
    let incompleteTasks = this.state.tasks.filter(function (task) {
      if (task.completed === false) {
        return true
      }
    });

    let completedTasks = this.state.tasks.filter(function (task) {
      if (task.completed === true) {
        return true
      }
    });

    return (
      <div className="container">
        <h1><Header headerDescription="Get stuff done" /></h1>
        <NewTask addedTask={this.addNewTask} />
        {incompleteTasks.length >= 1 &&
          <h2><Header headerDescription="Active tasks" /></h2>
        }
        <ActiveTasks tasks={incompleteTasks} deleteTaskFunc={this.deleteTask} markTaskAsCompleted={this.markTaskAsCompleted} />
        {completedTasks.length >= 1 &&
          
          <h2><Header headerDescription="Completed tasks" completedTasks/></h2>
        }
        <CompletedTasks tasks={completedTasks} markTaskAsActive={this.markTaskAsActive} />
      </div>
    );
  }
}

export default App;
