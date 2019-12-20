import React from 'react';
import './index.css';
import Header from './components/Header';
import NewTask from './components/NewTask';
import ActiveTasks from './components/ActiveTasks';
import CompletedTasks from './components/CompletedTasks';
const axios = require('axios');




class App extends React.Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    axios.get('https://aaq6fhm1q6.execute-api.eu-west-2.amazonaws.com/dev/tasks')
      .then((response) => {
        // handle success
        console.log(response)
        this.setState({ tasks: response.data.tasks });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }


  addNewTask = (task) => {
    axios.post('https://aaq6fhm1q6.execute-api.eu-west-2.amazonaws.com/dev/tasks', task)
      .then((response) => {
        let tasks = this.state.tasks;
        task.id = response.id;
        tasks.push(task);
        this.setState({ tasks: tasks });
      });
  }

  deleteTask = (taskId) => {
    axios.delete('https://aaq6fhm1q6.execute-api.eu-west-2.amazonaws.com/dev/tasks/{id}', taskId)
      .then((response) => {
        let tasks = this.state.tasks;
        // task.id = response.id;
        let tasksToKeep = tasks.filter(function (task) {
          return task.id !== taskId;
        });
        this.setState({ tasks: tasksToKeep });
      })

  }




  markTaskAsCompleted = (taskId) => {
    axios.put('https://aaq6fhm1q6.execute-api.eu-west-2.amazonaws.com/dev/tasks/{id}', taskId)
      .then((response) => {
        const updatedTasks = this.state.tasks.map(function (task) {
          if (task.id === taskId) {
            task.completed = true
          }
          return task
        });
        this.setState({ tasks: updatedTasks })
      })
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
      if (task.completed === "0") {
        return true
      }
    });

    let completedTasks = this.state.tasks.filter(function (task) {
      if (task.completed === "1") {
        return true
      }
    });

    return (
      <div className="container container-styles">

        <div className="banner">
          <div className="content">
            <h1>Get stuff done</h1>
          </div>
        </div>
        <NewTask addedTask={this.addNewTask} />
        {incompleteTasks.length >= 1 &&
          <h2><Header headerDescription="Active tasks" /></h2>
        }
        <ActiveTasks tasks={incompleteTasks} deleteTaskFunc={this.deleteTask} markTaskAsCompleted={this.markTaskAsCompleted} />
        {completedTasks.length >= 1 &&

          <h2><Header headerDescription="Completed tasks" /></h2>
        }
        <CompletedTasks tasks={completedTasks} markTaskAsActive={this.markTaskAsActive} />
      </div>
    );
  }
}

export default App;
