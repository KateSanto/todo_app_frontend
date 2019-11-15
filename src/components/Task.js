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
          {/* <button type="button" className="btn btn-success" onClick={this.completeTask}><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Done</button> */}
          <button type="button" class="btn btn-success px-3"><i class="far fa-thumbs-up" aria-hidden="true"></i></button>

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