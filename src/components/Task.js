import React from "react";

class Task extends React.Component {

  deleteTask = () => {
    this.props.deleteTaskFunc(this.props.task.id)
  }

  /*
  Done button:
  I need the click to that button to fire an event. The event will be a function (completeTask).
  This function will pass a this.props.completeTaskFunc that takes the completed key within the relevant task.
  I then need to pass that function up to Task's parent (ActiveTasks), and up again to its grandparent (App).
  Then I need to use completeTaskFunc as a prop. Something like completeTaskFunc={this.completeTask}.
  Then I need to define what completeTask is meant to do:
  - It needs to change the value of completed within the relevant task to true.
  - It needs to remove tasks with completed: true from the state. < Is this meant to happen here? Or in another function in CompletedTasks?
  - It needs to move the removed tasks to a child component (CompletedTask). < Is this meant to happen here? Or in another function in CompletedTasks?
  The CompletedTasks component will only display tasks with a value of true in the key 'completed'.
  */

  completeTask = () => {

  }

  render() {
    return (
      <div className="row taskBreak">
        <div className="col-8 green">
          {this.props.task.taskDescription}
        </div>
        <div className="col-2 button">
          <button type="button" className="btn btn-success" onClick={this.completeTask}>Done</button>
        </div>
        <div className="col-2 green">
          <button type="button" className="btn btn-danger" onClick={this.deleteTask}
          >Delete</button>
        </div>
      </div>
    );
  }
}

export default Task;