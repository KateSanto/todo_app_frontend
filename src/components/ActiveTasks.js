import React from 'react';
import Task from './Task';





class ActiveTasks extends React.Component {
    render() {
        return (
            <div>
                {this.props.tasks.map((task, index) => {
                    return <Task deleteTaskFunc={this.props.deleteTaskFunc} task={task} key={index} markTaskAsCompleted={this.props.markTaskAsCompleted}/>;
                })}
            </div>
        );
    }
}

export default ActiveTasks;