import React from "react";

class Task extends React.Component {

  deleteTask = () => {
    this.props.deleteTaskFunc(this.props.task.id)
  }

  updateTask = () => {
    this.props.markTaskAsCompleted(this.props.task.id, "1")
  }


  render() {
    return (
      <div className="row taskBreak">
        <div className="col-7 green">
          {this.props.task.taskDescription}
        </div>
        <div className="col-2 button">
          <button type="button" className="btn btn-danger" onClick={this.deleteTask}><span className="fas fa-trash-alt" aria-hidden="true"></span></button>
        </div>
        <div className="col-2 button">
          <button type="button" className="btn btn-success" onClick={this.updateTask}><span className="fas fa-check" aria-hidden="true"></span></button>
        </div>

      </div>
    );
  }
}

export default Task;