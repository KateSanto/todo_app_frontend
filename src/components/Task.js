import React from "react";

class Task extends React.Component {

  deleteTask = () => {
    this.props.deleteTaskFunc(this.props.task.id)
  }

  completeTask = () => {
    this.props.markTaskAsCompleted(this.props.task.id)
  }


  render() {
    return (
      <div className="row taskBreak">
        <div className="col-7 green">
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