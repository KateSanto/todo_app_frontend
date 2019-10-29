import React from 'react';
import Task from './Task';


// deleteATask = (taskId) => {
//     let tasks = this.state.tasks;

//     tasks.splice(taskId, 1);

//     this.setState({tasks});
//   }


class ActiveTasks extends React.Component {
    render() {
        return (
            <div>
                {this.props.tasks.map(function (task, index) {
                    return <Task task={task} key={index}
                    // deletedTask={this.deleteATask}

                    />;
                })}
            </div>
        );
    }
}

export default ActiveTasks;