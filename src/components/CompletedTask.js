import React from "react";

class CompletedTask extends React.Component {


  activateTask = () => {
    this.props.markTaskAsActive(this.props.task.id)
  }


  render() {
    return (
      <div className="row taskBreak completedTasks">
        <div className="col-8 green">
          {this.props.task.taskDescription}
        </div>
        <div className="col-2 button">
          <button type="button" className="btn btn-primary" onClick={this.activateTask}>Activate</button>
        </div>
      </div>
    );
  }
}

export default CompletedTask;