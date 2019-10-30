import React from "react";

class Task extends React.Component {

  deleteTask = () => {
    const taskId = this.task.id

    this.props.deletedTask(taskId);

  }

  completeTask = () => {

  }


  mouseOver = () => {
    console.log("Hello there");

  }

  mouseLeave = () => {
    console.log("See ya later");
  }

  render() {
    return (
      <div className="row taskBreak">
        <div className="col-8 green">
          {this.props.task.taskDescription}
        </div>
        <div className="col-2 button">
          <button type="button" className="btn btn-success" onClick={this.completeTask} onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>Done</button>
        </div>
        <div className="col-2 green">
          <button type="button" className="btn btn-danger"
          // onClick={this.deleteTask}
          >Delete</button>
        </div>
      </div>
    );
  }
}

export default Task;