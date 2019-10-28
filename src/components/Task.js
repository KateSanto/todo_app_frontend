import React from "react";

class Task extends React.Component {
 /*STARTING TO WORK ON DELETE BUTTON
  state = {tasks: []}

  deleteTask = (task) => {
    this.props.deletedTask(task); 

  }
  */


  render() {
    return (
        <div className="row taskBreak">
        <div className="col-8 green">
            {this.props.task.taskDescription}
        </div>
        <div className="col-2 button">
            <button type="button" className="btn btn-success">Done</button>
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