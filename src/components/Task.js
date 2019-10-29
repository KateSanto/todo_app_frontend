import React from "react";

class Task extends React.Component {

  // deleteTask = () => {
  //   const taskId = this.task.id

  //   this.props.deletedTask(taskId); 

  // }

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
          <button type="button" className="btn btn-danger"
          // onClick={this.deleteTask}
          >Delete</button>
        </div>
      </div>
    );
  }
}

export default Task;