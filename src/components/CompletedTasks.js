import React from 'react';
import Task from './Task';

/*Tasks move to CompletedTasks.js correctly now, but they keep the format from Task.js. 
I think I need a new component CompletedTask.js with a similar structure to Task.js. rows and cols will live there.
Then, in CompletedTasks.js, I'll have a similar structure to that in ActiveTasks.js
                    return <CompletedTask task={task} key={index} />;

*/

class CompletedTasks extends React.Component {
    render() {
        return (
            <div className="row taskBreak">
                <div className="col-10 green">
                    {this.props.tasks.map((task, index) => {
                        return <Task task={task.taskDescription} key={index} />
                    })}
                </div>
                <div className="col-2 button">
                    <button type="button" className="btn btn-primary">Activate</button>
                </div>
            </div>
        );
    }
}

export default CompletedTasks;